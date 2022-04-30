<script lang="ts">
	import { type IQuestion, store } from './store';
	import { Icon, Label } from '@smui/common';
	import Button from '@smui/button';
	import {
		coupleQueries,
		duelQueries,
		maximeQueries,
		sheOrHeQueries,
		situationQueries
	} from './queries';

	let angle = 0;

	const saveAndDisplayQuestion = async (question: IQuestion) => {
		if (!question) {
			launchWheel();
		} else {
			$store.question = question;
			$store.questionIdsAsked = [...$store.questionIdsAsked, question.id];
			$store.displayWheel = false;
			$store.displayQuestion = true;
		}
	};

	const launchWheel = async () => {
		let container: HTMLElement = document.querySelector('.container');
		angle = angle + Math.ceil((1 + Math.random()) * 360 * 4);
		container.style.transform = `rotate(${-angle}deg)`;
		const audio = new Audio('wheel-sound.mp3');
		audio.play();
		await new Promise((r) => setTimeout(r, 4000)); // 5000 is the time of the animation
		audio.volume = 0.8;
		await new Promise((r) => setTimeout(r, 250));
		audio.volume = 0.6;
		await new Promise((r) => setTimeout(r, 250));
		audio.volume = 0.4;
		await new Promise((r) => setTimeout(r, 250));
		audio.volume = 0.2;
		await new Promise((r) => setTimeout(r, 250));
		audio.pause();
		await new Promise((r) => setTimeout(r, 1000));
		getElementSelected();
	};

	const getElementSelected = () => {
		[
			{
				positionTop: document.querySelector('.one span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = maximeQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.two span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = coupleQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.three span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = sheOrHeQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.four span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = situationQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.five span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = maximeQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.six span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = coupleQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.seven span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = sheOrHeQueries.filter(
						({ id }) => !$store.questionIdsAsked.includes(id)
					);
					await saveAndDisplayQuestion(question);
				}
			},
			{
				positionTop: document.querySelector('.eight span').getBoundingClientRect().top,
				fn: async () => {
					const [question] = duelQueries.filter(({ id }) => !$store.questionIdsAsked.includes(id));
					await saveAndDisplayQuestion(question);
				}
			}
		]
			.sort((elA, elB) => elA.positionTop - elB.positionTop)[0]
			.fn();
	};
</script>

<section>
	<div class="score-container">
		<h1
			style="display: flex; justify-content: space-between; align-items: center; padding: 5px; margin: 0;"
		>
			<Label>SCORES</Label>
			<Button
				variant="raised"
				style="min-width: unset;"
				on:click={() => {
					$store.displayScore = true;
				}}
			>
				<Icon class="material-icons" style="margin: 0;">visibility</Icon>
			</Button>
		</h1>

		{#each $store.users as user}
			<p style="display: flex; align-items: center;">
				<span class="username">{user.name}</span>
				<span style="width: 60px;">{user.score} pts </span>
				<Button
					variant="raised"
					style="margin-right: 5px; min-width: unset;"
					on:click={() => (user.score += 1)}
				>
					<Icon class="material-icons" style="margin: 0;">add</Icon>
				</Button>
				<Button variant="raised" style="min-width: unset;" on:click={() => (user.score += 1)}>
					<Icon class="material-icons" style="margin: 0;">remove</Icon>
				</Button>
			</p>
		{/each}
	</div>

	<button id="spin" on:click={launchWheel}>Spin</button>
	<Icon
		class="material-icons arrow"
		style="margin: 0; color: rgba(0,0,0,.6); position: absolute; top: 97px; left: calc(50% - 42px); font-size: 84px; z-index: 98; filter: blur(1.5px); transform: rotate(90deg);"
		>play_arrow</Icon
	>

	<Icon
		class="material-icons arrow"
		style="margin: 0; color: var(--mdc-theme-error); position: absolute;top: 95px; left: calc(50% - 40px); font-size: 80px; z-index: 99; transform: rotate(90deg);"
		>play_arrow</Icon
	>
	<div class="container">
		<div class="one">
			<span>
				<br />Question<br />sur<br />Maxime<br /><br /><br /><br />
			</span>
		</div>
		<div class="two">
			<span>Question<br />sur<br />notre<br />couple<br /><br /><br /><br /></span>
		</div>
		<div class="three"><span><br />Elle<br />ou<br />lui<br /><br /><br /><br /></span></div>
		<div class="four"><span><br /><br />Mise en<br />situation<br /><br /><br /><br /></span></div>
		<div class="five"><span><br />Question<br />sur<br />Maxime<br /><br /><br /><br /></span></div>
		<div class="six">
			<span>Question<br />sur<br />notre<br />couple<br /><br /><br /><br /></span>
		</div>
		<div class="seven"><span><br />Elle<br />ou<br />lui<br /><br /><br /><br /></span></div>
		<div class="eight"><span><br /><br /><br />Duel<br /><br /><br /><br /></span></div>
	</div>
</section>

<style>
	.score-container {
		top: 10px;
		left: 10px;
		position: absolute;
		color: var(--mdc-theme-primary);
		background-color: rgba(255, 255, 255, 0.4);
		border-radius: 6px;
		padding: 5px 3px;
	}
	.score-container p {
		display: flex;
		justify-content: space-between;
		margin: 5px;
	}
	.username {
		width: 100px;
		padding-right: 20px;
	}

	* {
		box-sizing: border-box;
	}

	.container {
		width: 500px;
		height: 500px;
		background-color: white;
		border-radius: 50%;
		border: 15px solid white;
		position: relative;
		overflow: hidden;
		transition: 5s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	.container div {
		height: 50%;
		width: 200px;
		position: absolute;
		clip-path: polygon(100% 0, 50% 100%, 0 0);
		transform: translateX(-50%);
		transform-origin: bottom;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: bold;
		font-family: sans-serif;
		color: #fff;
		left: 135px;
	}

	.container .one {
		background-color: var(--mdc-theme-primary);
		left: 50%;
	}
	.container .two {
		background-color: var(--mdc-theme-secondary);
		transform: rotate(45deg);
	}
	.container .three {
		background-color: var(--mdc-theme-primary);
		transform: rotate(90deg);
	}
	.container .four {
		background-color: var(--mdc-theme-secondary);
		transform: rotate(135deg);
	}
	.container .five {
		background-color: var(--mdc-theme-primary);
		transform: rotate(180deg);
	}
	.container .six {
		background-color: var(--mdc-theme-secondary);
		transform: rotate(225deg);
	}
	.container .seven {
		background-color: var(--mdc-theme-primary);
		transform: rotate(270deg);
	}
	.container .eight {
		background-color: var(--mdc-theme-secondary);
		transform: rotate(315deg);
	}

	#spin {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		background-color: white;
		text-transform: uppercase;
		border: 8px solid #fff;
		font-weight: bold;
		font-size: 20px;
		color: var(--mdc-theme-primary);
		width: 80px;
		height: 80px;
		font-family: sans-serif;
		border-radius: 50%;
		cursor: pointer;
		outline: none;
		letter-spacing: 1px;
	}
	#spin:hover {
		width: 90px;
		height: 90px;
		font-size: 24px;
	}
</style>
