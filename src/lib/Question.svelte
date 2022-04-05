<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { scale, slide } from 'svelte/transition';
	import Countdown from './Countdown.svelte';

	export let question: string;
	export let questionId: string;
	export let responseA: string;
	export let responseB: string;
	export let responseC: string;
	export let responseD: string;
	export let goodAnswer: string;

	let isQuestionAsked = false;
	let isCountdownOver = false;

	const answer = (response: string) => {
		if (!isCountdownOver) {
			console.log(questionId);
			console.log(response);
		}
	};

	const onCountdownOver = () => {
		isCountdownOver = true;
	};

	$: getBackgroundColor = (response: string) => {
		if (isCountdownOver) {
			return `background-color: ${
				response === goodAnswer ? 'var(--mdc-theme-success)' : 'var(--mdc-theme-error)'
			}; color: white;`;
		}
	};
	$: getColor = () => {
		if (isCountdownOver) {
			return `color: white;`;
		}
	};
</script>

<section transition:scale>
	{#if isQuestionAsked && !isCountdownOver}
		<div transition:slide>
			<Countdown countdown={30} on:completed={() => onCountdownOver()} />
		</div>
	{/if}
	<Card>
		<Content><h1>Question</h1></Content>
		<Content><p>{question}</p></Content>
		{#if !isQuestionAsked}
			<Actions fullBleed>
				<Button on:click={() => (isQuestionAsked = true)}>
					<Label>Voir les propositions de réponses</Label>
					<i class="material-icons" aria-hidden="true">arrow_forward</i>
				</Button>
			</Actions>
		{:else}
			<div transition:slide>
				<Actions fullBleed style={getBackgroundColor(responseA)}>
					<Button on:click={() => answer('A')} disabled={isCountdownOver}>
						<Label style={getColor()}>A. {responseA}</Label>
						<i style={getColor()} class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
				<Actions fullBleed style={getBackgroundColor(responseB)}>
					<Button on:click={() => answer('B')} disabled={isCountdownOver}>
						<Label style={getColor()}>B. {responseB}</Label>
						<i style={getColor()} class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
				<Actions fullBleed style={getBackgroundColor(responseC)}>
					<Button on:click={() => answer('C')} disabled={isCountdownOver}>
						<Label style={getColor()}>C. {responseC}</Label>
						<i style={getColor()} class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
				<Actions fullBleed style={getBackgroundColor(responseD)}>
					<Button on:click={() => answer('D')} disabled={isCountdownOver}>
						<Label style={getColor()}>D. {responseD}</Label>
						<i style={getColor()} class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
			</div>
		{/if}
	</Card>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		margin: 0;
		font-size: 4em;
		color: var(--mdc-theme-primary);
		text-decoration: underline;
	}
	p {
		font-size: 1.5em;
	}
</style>
