<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Invitation from '$lib/Invitation.svelte';
	import GameTitle from '$lib/GameTitle.svelte';
	import Question from '$lib/Question.svelte';
	import Scores from '$lib/Scores.svelte';
	import Wheel from '$lib/Wheel.svelte';
	import { store } from '$lib/store';
	import '../app.css';
	import Agreement from '$lib/Agreement.svelte';
</script>

<svelte:head>
	<title>Witnesses Game</title>
</svelte:head>

<section>
	{#if $store.displayInvitation}
		<Invitation />
	{/if}
	{#if $store.displayGameTitle}
		<GameTitle />
	{/if}
	{#if $store.displayAgreement}
		<Agreement />
	{/if}
	{#if $store.displayWheel}
		<Wheel />
	{/if}
	{#if $store.displayQuestion}
		<Question
			question="Quel est le nom de mon chien d'enfance ? "
			questionId="cezecze"
			responseA="Flora"
			responseB="Gribouille"
			responseC="Pixies"
			responseD="Jet"
			goodAnswer="Gribouille"
		/>{/if}
	{#if $store.displayScore}
		<Scores />
	{/if}
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--mdc-theme-secondary);
	}
</style>
