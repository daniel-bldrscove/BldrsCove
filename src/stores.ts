import { writable, readable } from 'svelte/store';

export const themeMode = writable(null);

export const colors = readable({
	ltGray: '#cccccc',
	deepBlue: '#0b0d14',
	paleGray: '#626f7d',
	paleStone: '#e0eaf0',
	midBlue: '#2f75d6',
	brightBlue: '#38aaff',
	redWarning: '#d73855',
	edlYellow: '#feb91b',
});

export const isMobileMenuOpen = writable(false);
