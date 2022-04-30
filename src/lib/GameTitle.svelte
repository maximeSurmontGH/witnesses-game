<script lang="ts">
	import { store } from './store';
	import { Icon } from '@smui/button';
</script>

<section
	style="cursor: pointer;"
	on:click={() => {
		$store.displayGameTitle = false;
		$store.displayWhoAreYou = true;
	}}
>
	<h1>ont mon</h1>
	<h1 style="display: flex; align-items: center; justify-content: space-between;">
		témoin ? <span
			><Icon style="vertical-align: middle; font-size: 1em;" class="material-icons"
				>double_arrow</Icon
			></span
		>
	</h1>
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	h1 {
		margin: 0;
		margin-left: 20px;
		font-size: 14em;
		color: var(--mdc-theme-primary);
		width: 100%;
	}
	@media (max-width: 1100px) {
		h1 {
			font-size: 8em;
		}
	}
	@media (max-width: 600px) {
		h1 {
			font-size: 5em;
		}
	}
	@media (max-width: 400px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
