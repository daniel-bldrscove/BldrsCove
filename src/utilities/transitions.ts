import { expoInOut } from 'svelte/easing';

const transitionConfig = (delay = 0, duration = 0, x = 0, y = 0): Record<string, unknown> => ({
	delay,
	duration,
	x,
	y,
	easing: expoInOut,
});

export default transitionConfig;
