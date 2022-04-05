<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Invitation from '$lib/Invitation.svelte';
	import GameTitle from '$lib/GameTitle.svelte';
	import Question from '$lib/Question.svelte';
	import Scores from '$lib/Scores.svelte';
	import Wheel from '$lib/Wheel.svelte';
	import '../app.css';

	let users = [
		{ id: 'id', name: 'paul', score: 1 },
		{ id: 'id', name: 'vidal', score: 12 },
		{ id: 'id', name: 'hugo', score: 26 },
		{ id: 'id', name: 'baptiste', score: 13 },
		{ id: 'id', name: 'nico', score: 2 },
		{ id: 'id', name: 'charles', score: 37 }
	];
</script>

<svelte:head>
	<title>Witnesses Game</title>
</svelte:head>

<section>
	<Invitation />
	<!-- <GameTitle /> -->
	<!-- <Wheel {users} /> -->
	<!-- <Question
		question="Quel est le nom de mon chien d'enfance ? "
		questionId="cezecze"
		responseA="Flora"
		responseB="Gribouille"
		responseC="Pixies"
		responseD="Jet"
		goodAnswer="Gribouille"
	/> -->
	<!-- <Scores {users} /> -->
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
