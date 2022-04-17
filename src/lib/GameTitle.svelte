<script lang="ts">
	import { store } from './store';
	import Button from '@smui/button';
	import { Icon, Label } from '@smui/common';
</script>

<section>
	<h1>Qui sera mon</h1>
	<h1>témoin ?</h1>

	<Button
		variant="unelevated"
		style="place-self: flex-end; margin: 20px 20px 0 0;"
		on:click={() => {
			$store.displayGameTitle = false;
			$store.displayWheel = true;
		}}
		><Icon style=" font-size: 2em;width: fit-content;height: fit-content;" class="material-icons"
			>login</Icon
		><Label style=" font-size: 2em; text-transform: none;">rejoindre le jeu</Label></Button
	>
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
