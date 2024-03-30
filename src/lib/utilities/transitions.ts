import { expoInOut } from 'svelte/easing';

const transitionConfig = (
	delay = 0, duration = 0, x = 0, y = 0, easing = expoInOut
): Record<string, unknown> => ({
	delay,
	duration,
	x,
	y,
	easing,
});

export default transitionConfig;
