<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { scale, slide } from 'svelte/transition';
	import Countdown from './Countdown.svelte';
	import { type IResponse, store } from './store';

	const answer = (response: IResponse) => {
		if (!$store.isCounterDone) {
			console.log(response);
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
</script>

<section transition:scale>
	{#if $store.isCounterLaunched && !$store.isCounterDone}
		<div transition:slide>
			<Countdown countdown={30} on:completed={() => ($store.isCounterDone = true)} />
		</div>
	{/if}
	<Card style="width: 90%;">
		<Content><h1>Question</h1></Content>
		<Content><p>{$store.question || "En attente d'une question ..."}</p></Content>
		{#if !!$store.question}
			{#if !$store.isCounterLaunched}
				<Actions fullBleed>
					<Button on:click={() => ($store.isCounterLaunched = true)}>
						<Label>Voir les propositions de réponses</Label>
						<i class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
			{:else}
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
		font-size: 14px;
		color: var(--mdc-theme-primary);
	}
</style>
