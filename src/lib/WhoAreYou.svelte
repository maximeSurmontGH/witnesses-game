<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { scale } from 'svelte/transition';
	import { store } from './store';
</script>

<section transition:scale>
	<Card style="width: 90%;">
		<Content><h1>T'es qui au fait ?</h1></Content>
		{#each $store.users as user}
			<Actions fullBleed>
				<Button
					on:click={() => {
						$store.user = user;
						$store.displayWhoAreYou = false;
						$store.displayAgreement = true;
					}}
				>
					<Label>{user.name}</Label>
					<i class="material-icons" aria-hidden="true">double_arrow</i>
				</Button>
			</Actions>
		{/each}
		<Actions fullBleed>
			<Button
				on:click={() => {
					$store.displayWhoAreYou = false;
					$store.displayWheel = true;
				}}
			>
				<Label>Le marié</Label>
				<i class="material-icons" aria-hidden="true">double_arrow</i>
			</Button>
		</Actions>
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
	h1 {
		margin: 0;
		font-size: 3em;
		color: var(--mdc-theme-primary);
	}
</style>
