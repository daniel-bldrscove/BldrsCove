import { writable, readable } from 'svelte/store';

export const themeMode = writable(null);

export const colors = readable({
	deepBlue: '#090d1a',
	paleGray: '#626f7d',
	paleStone: '#e0eaf0',
	pureBlue: '#1a1a7a',
	brightBlue: '#38aaff'
});
