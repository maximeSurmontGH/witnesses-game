<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button from '@smui/button';
	import { scale } from 'svelte/transition';
	import { store } from './store';
	import { Label } from '@smui/common';

	$: usersSortedByScore = $store.users.sort((userA, userB) => userB.score - userA.score);

	const closeScores = () => {
		$store.displayScore = false;
	};
</script>

<section>
	<div transition:scale>
		<Card>
			<Content>
				<h1>
					<Label>Tableau des scores</Label>
				</h1></Content
			>
			{#each usersSortedByScore as user, i}
				<Content style="padding-top: 0; padding-bottom: 0;"
					><p style="font-size: {30 - 2 * i}px; font-weight: {800 - 150 * i};">
						<span class="username">{i + 1}. {user.name}</span>
						{user.score} pts
					</p></Content
				>
			{/each}
			<Actions fullBleed style="margin: 20px 10px 5px 10px;">
				<Button on:click={() => closeScores()} variant="unelevated">
					<Label>Fermer le tableau des scores</Label>
					<i class="material-icons" aria-hidden="true">close</i>
				</Button>
			</Actions>
		</Card>
	</div>
</section>

<style>
	section {
		position: absolute;
		background-color: rgba(50, 50, 50, 0.5);
		width: 100%;
		height: 100%;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h1 {
		margin: 0;
		font-size: 4em;
		color: var(--mdc-theme-primary);
	}
	p {
		font-size: 1.5em;
		margin: 0;
		display: flex;
		justify-content: space-between;
		color: var(--mdc-theme-primary);
	}
	.username {
		padding-right: 50px;
	}
</style>
