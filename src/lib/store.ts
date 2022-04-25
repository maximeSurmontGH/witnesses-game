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
	displayInvitation: false,
	displayGameTitle: true,
	displayWhoAreYou: false,
	displayAgreement: false,
	displayWheel: false,
	displayQuestion: false,
	displayScore: false,
	users: [
		{ id: '01', name: 'Baptiste', score: 0 },
		{ id: '02', name: 'Charles', score: 0 },
		{ id: '03', name: 'Hugo', score: 0 },
		{ id: '04', name: 'Nico', score: 0 },
		{ id: '05', name: 'Paul', score: 0 },
		{ id: '06', name: 'Vidal', score: 0 }
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
