import type { IUser } from './user.type';
import { writable } from 'svelte/store';

interface IStore {
	displayInvitation: boolean;
	displayGameTitle: boolean;
	displayAgreement: boolean;
	displayWheel: boolean;
	displayQuestion: boolean;
	displayScore: boolean;
	users: IUser[];
}

export const initStore: () => IStore = () => ({
	displayInvitation: false,
	displayGameTitle: true,
	displayAgreement: false,
	displayWheel: false,
	displayQuestion: false,
	displayScore: false,
	users: [
		{ id: 'id', name: 'paul', score: 1 },
		{ id: 'id', name: 'vidal', score: 12 },
		{ id: 'id', name: 'hugo', score: 26 },
		{ id: 'id', name: 'baptiste', score: 13 },
		{ id: 'id', name: 'nico', score: 2 },
		{ id: 'id', name: 'charles', score: 37 }
	]
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
