<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { scale, slide } from 'svelte/transition';
	import type { IUser } from '$src/types/user.type';

	export let users: IUser[];

	$: usersSortedByScore = users.sort((userA, userB) => userB.score - userA.score);

	const closeScores = () => {};
</script>

<section transition:scale>
	<Card>
		<Content><h1>Tableau des scores</h1></Content>
		{#each usersSortedByScore as user, i}
			<Content style="padding-top: 0; padding-bottom: 0;"
				><p style="font-size: {36 - 2 * i}px; font-weight: {1000 - 150 * i};">
					<span class="username">{i + 1}. {user.name}</span>
					{user.score} pts
				</p></Content
			>
		{/each}
		<Actions fullBleed style="margin-top: 20px;">
			<Button on:click={() => closeScores()}>
				<Label>Fermer le tableau des scores</Label>
				<i class="material-icons" aria-hidden="true">close</i>
			</Button>
		</Actions>
	</Card>
</section>

<style>
	h1 {
		margin: 0;
		font-size: 4em;
		color: var(--mdc-theme-primary);
		text-decoration: underline;
	}
	p {
		font-size: 1.5em;
		margin: 0;
		display: flex;
		justify-content: space-between;
	}
	.username {
		padding-right: 50px;
	}
</style>
