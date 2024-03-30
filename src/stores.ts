import { writable, readable } from 'svelte/store';

export const themeMode = writable();

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

export const frameworksTblData = readable({
	data: [
		{
			tech1: 'HTML & CSS',
			tech2: 'Javascript',
			tech3: 'React',
			tech4: 'Gatsby',
		},
		{
			tech1: 'Tailwindcss',
			tech2: 'Emotion',
			tech3: 'Styled Comp.',
			tech4: 'Sanity.io',
		},
		{
			tech2: 'Node Js',
			tech1: 'Vercel/Netlify',
		},
	],
});

export const clTblData = readable({
	data: [
		{
			tech1: 'Next Js',
			tech2: 'Svelte',
			tech3: 'Remix Run',
		},
	],
});

export const isMobileMenuOpen = writable(false);
