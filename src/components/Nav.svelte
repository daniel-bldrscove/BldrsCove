<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, scale, fade } from 'svelte/transition';

	import LayoutWrapper from '$lib/LayoutWrapper.svelte';
	import Icon from '$lib/Icon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import MoonIcon from '$lib/icons/MoonIcon.svelte';
	import bldrsCoveLogoLight from '../images/bldrscove-logo-light-md.png';
	import bldrsCoveLogoDark from '../images/bldrscove-logo-dark-md.png';

	let prevThemeIcon = null;
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
		prevThemeIcon = false;
		const html = document.documentElement;
		theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark');
		currentTheme = theme;
	};
</script>

<div
	class="flex items-center bg-gray-100 h-24 drop-shadow-xlLight opacity-90 dark:bg-bldrsCoveDeepBlue"
>
	<LayoutWrapper>
		<div class="w-full flex justify-between items-center">
			<div class="justify-start">
				<a href="/">
					<img
						src={currentTheme === 'dark' ? bldrsCoveLogoDark : bldrsCoveLogoLight}
						alt="BldrsCove Logo"
						class="w-44"
					/>
				</a>
			</div>
			<div class="justify-end">
				<nav class="flex justify-center items-center w-full">
					<h6>
						<a href="/#home" class="nav-item dark:text-bldrsCoveLtGray">Home</a>
					</h6>
					<h6>
						<a href="/#about" class="nav-item dark:text-bldrsCoveLtGray">About</a>
					</h6>
					<h6>
						<a href="/#web-dev" class="nav-item dark:text-bldrsCoveLtGray">Projects</a>
					</h6>
					<h6>
						<a href="/#contact" class="nav-item dark:text-bldrsCoveLtGray">Contact</a>
					</h6>
					{#if currentTheme === 'dark'}
						<button
							on:click={() => handleTheme('light')}
							on:mouseenter={() => (prevThemeIcon = true)}
							on:mouseleave={() => (prevThemeIcon = false)}
							class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md dark:hover:bg-bldrsCoveCoolGray"
						>
							{#if prevThemeIcon}
								<div class="absolute" in:fly={{ y: -20 }}>
									<Icon
										strokeColor="#edd08c"
										fillColor="transparent"
										width="32"
										height="32"
										name="sun-icon"
									>
										<SunIcon />
									</Icon>
								</div>
							{:else}
								<div in:fly={{ y: -20 }}>
									<Icon
										strokeColor="#2f75d6"
										fillColor="transparent"
										width="32"
										height="32"
										name="moon-icon"
									>
										<MoonIcon />
									</Icon>
								</div>
							{/if}
						</button>
					{:else}
						<button
							on:click={() => handleTheme('dark')}
							on:mouseenter={() => (prevThemeIcon = true)}
							on:mouseleave={() => (prevThemeIcon = false)}
							class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md"
						>
							{#if prevThemeIcon}
								<div class="absolute" in:fly={{ y: -20 }}>
									<Icon
										strokeColor="#9CA6B6"
										fillColor="transparent"
										width="32"
										height="32"
										name="moon-icon"><MoonIcon /></Icon
									>
								</div>
							{:else}
								<div in:fly={{ y: -20 }}>
									<Icon
										strokeColor="#9CA6B6"
										fillColor="transparent"
										width="32"
										height="32"
										name="sun-icon"
									>
										<SunIcon />
									</Icon>
								</div>
							{/if}
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
