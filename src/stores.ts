import { writable, readable } from 'svelte/store';
import { goto, prefetch } from '$app/navigation';

export const themeMode = writable(null);

export const colors = readable({
	ltGray: '#cccccc',
	deepBlue: '#090d1a',
	paleGray: '#626f7d',
	paleStone: '#e0eaf0',
	pureBlue: '#093bc7',
	midBlue: '#2f75d6',
	brightBlue: '#38aaff'
});

export const navigate = (project: string):void => {
	prefetch(project);
	goto(project);
};

export const isMobileMenuOpen = writable(false)