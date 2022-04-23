<script lang="ts">
	import { scale } from 'svelte/transition';
	import { store } from './store';
	import { Icon, Label } from '@smui/common';

	$: usersSortedByScore = $store.users.sort((userA, userB) => userB.score - userA.score);

	let angle: number = 0;

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
		await new Promise((r) => setTimeout(r, 2000));
		getElementSelected();
	};

	const getElementSelected = () => {
		[
			{
				positionTop: document.querySelector('.one span').getBoundingClientRect().top,
				fn: () => {
					$store.displayWheel = false;
					$store.displayQuestion = true;
				}
			},
			{
				positionTop: document.querySelector('.two span').getBoundingClientRect().top,
				fn: () => console.log('2')
			},
			{
				positionTop: document.querySelector('.three span').getBoundingClientRect().top,
				fn: () => console.log('3')
			},
			{
				positionTop: document.querySelector('.four span').getBoundingClientRect().top,
				fn: () => console.log('4')
			},
			{
				positionTop: document.querySelector('.five span').getBoundingClientRect().top,
				fn: () => console.log('5')
			},
			{
				positionTop: document.querySelector('.six span').getBoundingClientRect().top,
				fn: () => console.log('6')
			},
			{
				positionTop: document.querySelector('.seven span').getBoundingClientRect().top,
				fn: () => console.log('7')
			},
			{
				positionTop: document.querySelector('.eight span').getBoundingClientRect().top,
				fn: () => console.log('8')
			}
		]
			.sort((elA, elB) => elA.positionTop - elB.positionTop)[0]
			.fn();
	};
</script>

<section transition:scale>
	<div
		class="score-container"
		on:click={() => {
			$store.displayScore = true;
		}}
	>
		<h1>
			<Icon style="vertical-align: bottom;" class="material-icons">scoreboard</Icon>
			<Label>SCORES</Label>
		</h1>

		{#each usersSortedByScore as user, i}
			<p>
				<span class="username">{i + 1}. {user.name}</span>
				{user.score} pts
			</p>
		{/each}
	</div>

	<button id="spin" on:click={launchWheel}>Spin</button>
	<span class="arrow">&#8595;</span>
	<div class="container">
		<div class="one"><span>Action</span></div>
		<div class="two"><span /></div>
		<div class="three"><span>3</span></div>
		<div class="four"><span>4</span></div>
		<div class="five"><span>5</span></div>
		<div class="six"><span>6</span></div>
		<div class="seven"><span>7</span></div>
		<div class="eight"><span>8</span></div>
	</div>
</section>

<style>
	.score-container {
		top: 0;
		left: 10px;
		position: absolute;
		cursor: pointer;
		color: var(--mdc-theme-primary);
	}
	.score-container p {
		display: flex;
		justify-content: space-between;
		margin: 5px;
	}
	.username {
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

	.arrow {
		position: absolute;
		top: 40px;
		left: 50%;
		transform: translateX(-50%);
		color: var(--mdc-theme-error);
		font-size: 80px;
		z-index: 99;
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
</style>
