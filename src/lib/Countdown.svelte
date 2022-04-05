<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount, onDestroy } from 'svelte';

	export let countdown = 0;

	const dispatch = createEventDispatcher();

	let timer = null;

	onMount(() => {
		timer = setInterval(() => {
			countdown -= 1;
		}, 1000);
	});

	onDestroy(() => {
		if (timer) {
			clearInterval(timer);
		}
	});

	$: {
		if (countdown === 0) {
			clearInterval(timer);
			timer = null;
			dispatch('completed');
		}
	}
</script>

<p>
	{countdown}
</p>

<style>
	p {
		color: var(--mdc-theme-primary);
		background-color: white;
		font-size: 50px;
		font-weight: bold;
		margin: 0;
		margin-bottom: 20px;
		padding: 10px 20px;
		border: 5px solid var(--mdc-theme-primary);
		border-radius: 10px;
	}
</style>
