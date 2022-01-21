<style>
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from '../shared/Icon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import MoonIcon from '$lib/icons/MoonIcon.svelte';
	import { themeMode, colors } from '../../stores';
	import { browser } from '$app/env';

	let prevThemeIcon = null;

	let handleTheme = (theme: string): void => {
		prevThemeIcon = false;
		const html = document.documentElement;
		theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark');
		browser && window.localStorage.setItem('theme', theme);
		themeMode.update((val) => (val = theme));
	};
</script>

<div class="theme-button">
	<ul class="flex justify-center items-center w-full">
		<li>
			{#if $themeMode === 'dark'}
				<button
					on:click="{() => handleTheme('light')}"
					on:mouseenter="{() => (prevThemeIcon = true)}"
					on:mouseleave="{() => (prevThemeIcon = false)}"
					class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md dark:hover:bg-edlCoolGray"
				>
					{#if prevThemeIcon}
						<div class="absolute" in:fly="{{ y: -20 }}">
							<Icon
								strokeColor="{$themeMode === 'dark' ? $colors.edlYellow : $colors.edlYellow}"
								fillColor="transparent"
								width="32"
								height="32"
								name="sun-icon"
							>
								<SunIcon />
							</Icon>
						</div>
					{:else}
						<div in:fly="{{ y: -20 }}">
							<Icon
								strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.brightBlue}"
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
					on:click="{() => handleTheme('dark')}"
					on:mouseenter="{() => (prevThemeIcon = true)}"
					on:mouseleave="{() => (prevThemeIcon = false)}"
					class="w-10 h-10 nav-item hover:bg-gray-200 flex justify-center items-center rounded-md"
				>
					{#if prevThemeIcon}
						<div class="absolute" in:fly="{{ y: -20 }}">
							<Icon
								strokeColor="{$colors.midBlue}"
								fillColor="transparent"
								width="32"
								height="32"
								name="moon-icon"><MoonIcon /></Icon
							>
						</div>
					{:else}
						<div in:fly="{{ y: -20 }}">
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
</div>
