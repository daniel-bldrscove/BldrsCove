<script lang="ts">
	import { onMount } from 'svelte';
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import sunIcon from '../images/icons/sun.svg';
	import moonIcon from '../images/icons/moon.svg';

	let currentTheme: string;

	onMount(() => {
		const theme =
			document.documentElement.className === 'dark' ||
			window.localStorage.theme === 'dark' ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		currentTheme = theme;
	});

	const handleTheme = (theme: string): void => {
		const html = document.documentElement;
		console.log('Changing theme to : ', theme);
		theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark');
		currentTheme = theme;
		console.log('Current theme', currentTheme);
	};
</script>

<div class="flex items-center bg-gray-100 h-24 ">
	<LayoutWrapper>
		<div class="w-full flex justify-between items-center">
			<div class="justify-start"><h1>BldrsCove</h1></div>
			<div class="justify-end">
				<nav class="flex justify-center items-center w-full">
					<h6><a href="/" class="nav-item">Home</a></h6>
					<h6><a href="/" class="nav-item">About</a></h6>
					<h6><a href="/" class="nav-item">Projects</a></h6>
					<h6><a href="/" class="nav-item">Contact</a></h6>
					{#if currentTheme === 'dark'}
						<button
							on:click={() => handleTheme('light')}
							class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md"
						>
							<img src={sunIcon} alt="Sun icon for light theme" class="w-7 " />
						</button>
					{:else}
						<button
							on:click={() => handleTheme('dark')}
							class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md"
						>
							<img src={moonIcon} alt="Sun icon for light theme" class="w-6" />
						</button>
					{/if}
				</nav>
			</div>
		</div>
	</LayoutWrapper>
</div>

<style>
	.nav-item {
		@apply ml-8;
	}
</style>
