<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { themeMode } from '../stores';

	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import CarrotIcon from '$lib/icons/CarrotIcon.svelte';
	import Icon from '$lib/subComponents/Icon.svelte';
	import CarrotDownIcon from '$lib/icons/CarrotDownIcon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import MoonIcon from '$lib/icons/MoonIcon.svelte';
	import bldrsCoveLogoLight from '../images/bldrscove-logo-light-md.png';
	import bldrsCoveLogoDark from '../images/bldrscove-logo-dark-md.png';
	import DropDownNav from '$lib/subComponents/DropDownNav.svelte';

	let prevThemeIcon = null;

	onMount(() => {
		const theme =
			document.documentElement.className === 'dark' ||
			window.localStorage.theme === 'dark' ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';

		themeMode.update((val) => (val = theme));
	});

	const handleTheme = (theme: string): void => {
		prevThemeIcon = false;
		const html = document.documentElement;
		theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark');
		themeMode.update((val) => (val = theme));
	};
</script>

<nav
	class="flex items-center bg-gray-100 h-24 drop-shadow-xlLight opacity-90 dark:bg-bldrsCoveDeepBlue"
>
	<LayoutWrapper>
		<div class="w-full flex justify-between items-center">
			<div class="justify-start">
				<a href="/">
					<img
						src={$themeMode === 'dark' ? bldrsCoveLogoDark : bldrsCoveLogoLight}
						alt="BldrsCove Logo"
						class="w-44"
					/>
				</a>
			</div>
			<div class="justify-end">
				<nav>
					<ul class="flex justify-center items-center w-full">
						<li>
							<h6>
								<a href="#home-top-section" class="nav-item dark:text-bldrsCoveLtGray">Home</a>
							</h6>
						</li>
						<li>
							<h6>
								<a href="#about" class="nav-item dark:text-bldrsCoveLtGray">About</a>
							</h6>
						</li>
						<li class="relative group block h-auto">
							<div class="hidden absolute top-4 mt-2 ml-8 group-hover:block group-hover:h-full">
								<DropDownNav />
							</div>
							<h6>
								<span class="flex justify-content items-center">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#" class="nav-item dark:text-bldrsCoveLtGray">Projects</a>
									<CarrotIcon
										strokeColor={$themeMode === 'dark' ? '#cccccc' : '#333742'}
										fillColor="transparent"
										width="14"
										height="14"
										name="sun-icon"
										svgClass="ml-2 transform -rotate-90 group-hover:transition group-hover:duration-350 group-hover:ease-in-out group-hover:rotate-0"
									>
										<CarrotDownIcon />
									</CarrotIcon>
								</span>
							</h6>
						</li>
						<li>
							<h6>
								<a href="#contact" class="nav-item dark:text-bldrsCoveLtGray">Contact</a>
							</h6>
						</li>
						<li>
							{#if $themeMode === 'dark'}
								<button
									on:click={() => handleTheme('light')}
									on:mouseenter={() => (prevThemeIcon = true)}
									on:mouseleave={() => (prevThemeIcon = false)}
									class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md dark:hover:bg-bldrsCoveCoolGray"
								>
									{#if prevThemeIcon}
										<div class="absolute" in:fly={{ y: -20 }}>
											<Icon
												strokeColor="#F7BA85"
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
												strokeColor="#2f75d6"
												fillColor="transparent"
												width="32"
												height="32"
												name="moon-icon"><MoonIcon /></Icon
											>
										</div>
									{:else}
										<div in:fly={{ y: -20 }}>
											<Icon
												strokeColor="#b1c5cf"
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
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</LayoutWrapper>
</nav>

<style>
	.nav-item {
		@apply ml-8 text-ashenHighContrast-light;
	}
</style>
