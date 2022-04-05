<script lang="ts">
	import { Content } from '@smui/card';
	import { scale } from 'svelte/transition';
	import type { IUser } from '$src/types/user.type';

	export let users: IUser[];

	$: usersSortedByScore = users.sort((userA, userB) => userB.score - userA.score);
</script>

<section transition:scale>
	<div class="score-container">
		{#each usersSortedByScore as user, i}
			<Content style="padding-top: 0; padding-bottom: 0;"
				><p>
					<span class="username">{i + 1}. {user.name}</span>
					{user.score} pts
				</p></Content
			>
		{/each}
	</div>
</section>

<style>
	.score-container {
		top: 0;
		left: 0;
		position: absolute;
	}
	.score-container p {
		display: flex;
		justify-content: space-between;
	}
	.username {
		padding-right: 20px;
	}
</style>
