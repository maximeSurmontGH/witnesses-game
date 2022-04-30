<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Invitation from '$lib/Invitation.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Witnesses Game</title>
</svelte:head>

<section>
	<Invitation />
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
