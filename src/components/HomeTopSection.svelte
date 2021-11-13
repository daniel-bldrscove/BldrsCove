<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { themeMode, colors } from '../stores';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from '$lib/subComponents/LayoutContainLg.svelte';
	import Icon from '$lib/subComponents/Icon.svelte';
	import ArrowCursorIcon from '$lib/icons/ArrowCursorIcon.svelte';
	import ComputerIcon from '$lib/icons/ComputerIcon.svelte';
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
				size: $themeMode === 'dark' ? 0.9 : 1.25
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
			baseColor: $themeMode === 'dark' ? $colors.deepBlue : $colors.brightBlue,
			backgroundColor: $themeMode === 'dark' ? $colors.deepBlue : '#b9cdd7',
			amplitudeFactor: 2,
			xOffset: 0.18,
			yOffset: 0.12,
			size: 1.25
		});

		return () => haloEffect.destroy();
	});
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="home-top-section" class="anchor-tag" />
<div
	class="dark:bg-bldrsCoveCoolGray flex justify-center items-center"
	bind:this={vantaContainer}
	transition:fade={{ delay: 100, duration: 100 }}
>
	<LayoutWrapper>
		<LayoutContainLg>
			<div class="hero-container relative flex justify-center items-center">
				<div class="flex-wrapper">
					<div class="text-container">
						<h1
							class="mb-6 text-bldrsCoveMidBlue dark:text-bldrsCoveBrightBlue"
							transition:fade={{ delay: 100, duration: 100 }}
						>
							Hello, I'm Daniel.
						</h1>
						<h2
							class="text-2xl sm:text-4xl-a sm:leading-4xl-a text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray md:w-10/12 xl:w-9/12 2xl:w-5/12"
							transition:fade={{ delay: 100, duration: 1200 }}
						>
							I build interactive experiences on the web through UI and modern javascript
							technologies.
						</h2>
					</div>
					<div class="mt-20 flex flex-wrap">
						<span class="cta-link" transition:fade={{ delay: 200, duration: 300 }}>
							<a href="#about">
								<Icon
									strokeColor={$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}
									fillColor="transparent"
									width="32"
									height="32"
									name="arrow-cursor-icon"
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
						<span
							class="w-full mt-6 sm:w-auto sm:mt-0 sm:ml-14 cta-link"
							transition:fade={{ delay: 300, duration: 600 }}
						>
							<a href="#web-dev">
								<Icon
									strokeColor={$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}
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
				</div>
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>

<style>
	.hero-container {
		height: calc(100vh - 6rem);
	}

	/* @media (max-width); */
</style>
