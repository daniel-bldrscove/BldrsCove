<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { themeMode, colors } from '../stores';
	import LayoutWrapper from '$lib/LayoutWrapper.svelte';
	import Icon from '$lib/Icon.svelte';
	import ArrowCursorIcon from '$lib/icons/ArrowCursorIcon.svelte';
	import ComputerIcon from '$lib/icons/ComputerIcon.svelte';
	import { browser } from '$app/env';
	import HALO from 'vanta/dist/vanta.halo.min';
	let vantaContainer;
	let haloEffect = null;

	const updateHaloEffect = () => {
		haloEffect &&
			haloEffect.setOptions({
				baseColor: $themeMode === 'dark' ? $colors.deepBlue : $colors.brightBlue,
				backgroundColor: $themeMode === 'dark' ? $colors.deepBlue : '#b9cdd7',
				xOffset: $themeMode === 'dark' ? 0 : 0.18,
				yOffset: $themeMode === 'dark' ? -0.48 : 0.12,
				size: $themeMode === 'dark' ? 0.65 : 1.25
			});
	};

	$: $themeMode, updateHaloEffect();

	onMount(() => {
		haloEffect = HALO({
			el: vantaContainer,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			baseColor: $colors.brightBlue,
			backgroundColor: $colors.paleStone,
			amplitudeFactor: 2,
			xOffset: 0.18,
			yOffset: 0.12,
			size: 1.25
		});

		return () => haloEffect.destroy();
	});
</script>

<div
	id="home-top-section"
	class="dark:bg-bldrsCoveCoolGray h-screen flex justify-center items-center"
	bind:this={vantaContainer}
	transition:fade={{ delay: 100, duration: 100 }}
>
	<LayoutWrapper>
		<div class="grid grid-cols-12 grid-rows-2 mt-20">
			<div class="text-container col-span-12 row-start-1 row-span-2 grid content-center">
				<div class="text-content">
					<h1
						class="mb-6 text-white dark:text-bldrsCoveBrightBlue"
						transition:fade={{ delay: 100, duration: 100 }}
					>
						Hello, I'm Daniel.
					</h1>
					<h2
						class="text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray"
						transition:fade={{ delay: 100, duration: 1200 }}
					>
						I build interactive experiences on the web through UI and modern javascript
						technologies.
					</h2>
				</div>
			</div>
		</div>
		<div class="mt-20">
			<span class="cta-link" transition:fade={{ delay: 200, duration: 300 }}>
				<a href="#about">
					<Icon
						strokeColor={$themeMode === 'dark' ? $colors.brightBlue : '#fff'}
						fillColor="transparent"
						width="32"
						height="32"
						name="arrow-icon"
						svgClass="inline-block"
					>
						<ArrowCursorIcon />
					</Icon>
					<h6
						class="inline-block text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray slide-left-right"
					>
						About me
					</h6>
				</a>
			</span>
			<span class="ml-14 cta-link" transition:fade={{ delay: 300, duration: 600 }}>
				<a href="#web-dev">
					<Icon
						strokeColor={$themeMode === 'dark' ? $colors.brightBlue : '#fff'}
						fillColor="transparent"
						width="32"
						height="32"
						name="computer-icon"
						svgClass="inline-block"
					>
						<ComputerIcon />
					</Icon>
					<h6
						class="inline-block text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray ml-2 slide-left-right"
					>
						Recent work
					</h6>
				</a>
			</span>
		</div>
	</LayoutWrapper>
</div>

<style>
</style>
