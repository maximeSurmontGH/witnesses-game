import type { IUser } from './user.type';
import { writable } from 'svelte/store';

export interface IResponse {
	label: string;
	isCorrect: boolean;
}
export interface IQuestion {
	id: string;
	label: string;
	responses: IResponse[];
}
interface IStore {
	api: {
		url: string;
		key: string;
	};
	displayInvitation: boolean;
	displayGameTitle: boolean;
	displayWhoAreYou: boolean;
	displayAgreement: boolean;
	displayWheel: boolean;
	displayQuestion: boolean;
	displayScore: boolean;
	users: IUser[];
	user?: IUser;
	question?: IQuestion;
	isCounterLaunched: boolean;
	isCounterDone: boolean;
	questionIdsAsked: string[];
}

export const initStore: () => IStore = () => ({
	api: { url: 'https://api.airtable.com/v0/appSlVZRstmNGka1f/Questions', key: 'key6cd96uiyWqIsVL' },
	displayInvitation: false,
	displayGameTitle: true,
	displayWhoAreYou: false,
	displayAgreement: false,
	displayWheel: false,
	displayQuestion: false,
	displayScore: false,
	users: [
		{ id: 'USER 01', name: 'Baptiste', score: 0 },
		{ id: 'USER 02', name: 'Charles', score: 0 },
		{ id: 'USER 03', name: 'Hugo', score: 0 },
		{ id: 'USER 04', name: 'Paul', score: 0 },
		{ id: 'USER 05', name: 'Vidal', score: 0 }
	],
	isCounterLaunched: false,
	isCounterDone: false,
	questionIdsAsked: []
});

const createStore = () => {
	const { subscribe, set, update } = writable<IStore>(initStore());

	return {
		subscribe,
		update,
		set,
		reset: () => set(initStore())
	};
};

export const store = createStore();
