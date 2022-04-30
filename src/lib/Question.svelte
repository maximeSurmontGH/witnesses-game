<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { scale, slide } from 'svelte/transition';
	import Countdown from './Countdown.svelte';
	import { type IResponse, store } from './store';
	import { Icon } from '@smui/common';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import {
		coupleQueries,
		duelQueries,
		maximeQueries,
		sheOrHeQueries,
		situationQueries
	} from './queries';

	let recordsToDisplay;

	const displayQuestionToOthers = async () => {
		const res = await axios.post(`${$store.api.url}?api_key=${$store.api.key}`, {
			records: [
				{
					fields: {
						questionId: $store.question.id,
						isDisplayed: true
					}
				}
			]
		});
		$store.isCounterLaunched = true;
		recordsToDisplay = res.data.records[0];
	};

	const fetchDisplayedQuestion = async () => {
		const questionsFromApi = await axios.get(
			`${$store.api.url}?api_key=${$store.api.key}&view=Grid%20view`
		);
		if (questionsFromApi.data?.records?.length) {
			recordsToDisplay = questionsFromApi.data.records.find((q) => q.fields.isDisplayed);
			const questionToDisplayId = recordsToDisplay?.fields?.questionId;
			if (questionToDisplayId) {
				$store.question = [
					...coupleQueries,
					...duelQueries,
					...maximeQueries,
					...sheOrHeQueries,
					...situationQueries
				].find((q) => q.id === questionToDisplayId);
			} else {
				recordsToDisplay = undefined;
				$store.question = undefined;
				$store.isCounterLaunched = false;
				$store.isCounterDone = false;
			}
		}
		await new Promise((r) => setTimeout(r, 2000));
		fetchDisplayedQuestion();
	};

	onMount(() => {
		if ($store.user) {
			fetchDisplayedQuestion();
		}
	});

	const answer = async (response: IResponse) => {
		if ($store.user) {
			const userResponse = {
				records: [
					{
						id: recordsToDisplay.id,
						fields: {}
					}
				]
			};
			userResponse.records[0].fields[$store.user.id] = response.isCorrect;
			console.log('userResponse', userResponse);
			await axios.patch(`${$store.api.url}?api_key=${$store.api.key}`, userResponse);
		}
	};

	$: getBackgroundColor = (response: IResponse) => {
		if ($store.isCounterDone) {
			return `background-color: ${
				response.isCorrect ? 'var(--mdc-theme-success)' : 'var(--mdc-theme-error)'
			}; color: white;`;
		}
	};

	$: getColor = () => {
		if ($store.isCounterDone) {
			return `color: white;`;
		}
	};

	const resetQuestion = () => {
		$store.question = undefined;
		$store.isCounterLaunched = false;
		$store.isCounterDone = false;
		$store.displayQuestion = false;
		recordsToDisplay = undefined;
	};

	const closeQuestion = async () => {
		if (recordsToDisplay?.id) {
			const userResponse = {
				records: [
					{
						id: recordsToDisplay.id,
						fields: {
							isDisplayed: false
						}
					}
				]
			};
			await axios.patch(`${$store.api.url}?api_key=${$store.api.key}`, userResponse);
			const finalResult = await axios.get(
				`${$store.api.url}/${recordsToDisplay.id}?api_key=${$store.api.key}`
			);
			$store.users.forEach((user) => {
				if (finalResult?.data?.fields[user.id]) {
					user.score = user.score + 1;
				}
			});
		}
		resetQuestion();

		$store.displayWheel = true;
	};
</script>

<section transition:scale>
	{#if $store.isCounterLaunched && !$store.isCounterDone && !$store.user}
		<div transition:slide>
			<Countdown countdown={30} on:completed={() => ($store.isCounterDone = true)} />
		</div>
	{/if}
	<Card style="width: 90%;">
		<Content
			><h1>
				Question
				{#if !$store.user}
					<Icon
						style="cursor: pointer; float: right; font-weight: bold;"
						class="material-icons"
						on:click={closeQuestion}>close</Icon
					>
				{/if}
			</h1></Content
		>
		<Content><p>{$store?.question?.label || "En attente d'une question ..."}</p></Content>
		{#if !!$store.question}
			{#if !$store.isCounterLaunched && $store.question && !$store.user && $store.question.responses.length}
				<Actions fullBleed>
					<Button on:click={() => displayQuestionToOthers()}>
						<Label>Voir les propositions de réponses</Label>
						<i class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
			{:else if $store.isCounterLaunched || !!$store.user}
				<div transition:slide>
					{#each $store.question.responses as response, index}
						<Actions fullBleed style={getBackgroundColor(response)}>
							<Button on:click={() => answer(response)} disabled={$store.isCounterDone}>
								<Label style={getColor()}>{index}. {response.label}</Label>
								<i style={getColor()} class="material-icons" aria-hidden="true">arrow_forward</i>
							</Button>
						</Actions>
					{/each}
				</div>
			{/if}
		{/if}
	</Card>
</section>

<style>
	section {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	section > div {
		padding: 10px;
	}
	h1 {
		margin: 0;
		font-size: 3em;
		color: var(--mdc-theme-primary);
	}
	p {
		font-size: 20px;
		color: var(--mdc-theme-primary);
	}
</style>
