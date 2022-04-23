<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button from '@smui/button';
	import { scale } from 'svelte/transition';
	import { store } from './store';
	import { Label } from '@smui/common';
	import Checkbox from '@smui/checkbox';
	import FormField from '@smui/form-field';

	let checked = false;

	const closeScores = () => {
		$store.displayAgreement = false;
		$store.displayWheel = true;
	};
</script>

<section>
	<div transition:scale>
		<Card>
			<Content>
				<h1>
					<Label>Droits et devoir du témoin</Label>
				</h1></Content
			>
			<Content style="padding-top: 0; padding-bottom: 0;">
				<p class="no-margin">En tant que témoin, je m'engage à :</p>
				<br />
				<p>- Signer un papier à la mairie qui atteste de notre mariage.</p>
				<p>- Me voir confier la garde des alliances.</p>
				<p>- Aider à l'organisation du mariage :</p>
				<p style="margin-left: 20px;">- Faire de la Cricut® avec Chloé.</p>
				<p style="margin-left: 20px;">- Gérer les invités.</p>
				<p style="margin-left: 20px;">- Gérer les prestataires.</p>
				<p style="margin-left: 20px;">- Intervenir le jour J pour éviter tout problème.</p>
				<p>
					- Aider le marié dans le choix de son costume et dans le choix de la tenue des témoins.
				</p>
				<p>- Conduire la voiture des marié le jour J.</p>
				<p>- Organiser un enterement de vie de garçon pleine de décadences et d'humiliations.</p>
				<p>- Organiser un event le jour J.</p>
				<p>- Faire un discours le jour J sur comment nous sommes un couple incroyable.</p>
				<p>- M'empecher de m'enfuir.</p>
				<p>- Nous conseiller sur les sons à valider avec le DJ.</p>
				<p>- A ne draguer personne de nos familles.</p>
			</Content>
			<Actions
				fullBleed
				style="margin: 10px; display:flex; flex-direction: column; align-items: flex-start;"
			>
				<FormField style="margin-left: -13px;">
					<Checkbox bind:checked touch />
					<span slot="label" style="color: var(--mdc-theme-primary);"
						>J'accepte cet engagement.</span
					>
				</FormField>
				<Button on:click={() => closeScores()} variant="unelevated" disabled={!checked}>
					<Label>Validation</Label>
					<i class="material-icons" aria-hidden="true">done</i>
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
		font-size: 3em;
		color: var(--mdc-theme-primary);
	}
	p {
		font-size: 14px;
		margin: 0;
		display: flex;
		justify-content: space-between;
		color: var(--mdc-theme-primary);
		margin-bottom: 5px;
		margin-left: 13px;
	}

	.no-margin {
		margin-left: 0;
	}

	.username {
		padding-right: 50px;
	}
</style>
