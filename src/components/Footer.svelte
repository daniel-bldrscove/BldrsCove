<script lang="ts">
	import { onMount } from 'svelte';
	import footerLogoLight from '../images/bldrscove-secondary-logo-light-md.png';
	import footerLogoDark from '../images/bldrscove-secondary-logo-dark-md.png';
	let theme: string;
	$: currentTheme = theme;

	// TODO: theme needs to go inside a store

	onMount(() => {
		const colorTheme =
			document.documentElement.className === 'dark' ||
			window.localStorage.theme === 'dark' ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';

		theme = colorTheme;
	});
</script>

<div
	class="w-full grid grid-cols-1 justify-center content-center bg-gray-200 h-32 pt-2 dark:bg-bldrsCoveDeepBlue"
>
	<div class="self-center justify-self-center">
		<img
			src={currentTheme === 'dark' ? footerLogoDark : footerLogoLight}
			alt="BldrsCove secondary logo"
			class="w-20"
		/>
	</div>
	<small class="text-center mt-2 self-center justify-self-center text-ashenMidContrast-light">
		{`Designed & built by Daniel Lopez`}
	</small>
</div>

<style>
</style>
