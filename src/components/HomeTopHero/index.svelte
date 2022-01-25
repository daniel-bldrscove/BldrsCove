<style>
	.home-top-section-light {
		background: -webkit-radial-gradient(
				22% 54%,
				circle farthest-corner,
				rgba(255, 230, 184, 0.75) 0%,
				rgba(255, 228, 194, 0) 26%
			),
			-webkit-radial-gradient(100% 0%, circle farthest-corner, rgba(163, 194, 241, 1) 0%, rgba(
							191,
							207,
							255,
							0
						)
						26%),
			-webkit-radial-gradient(10% 100%, circle farthest-corner, rgba(163, 194, 241, 1) 0%, rgba(
							163,
							194,
							241,
							0.2
						)
						26%);
	}

	.home-top-section-dark {
		background: -webkit-radial-gradient(
				28% 54%,
				circle farthest-corner,
				rgba(255, 217, 194, 0.65) -120%,
				rgba(255, 228, 194, 0) 26%
			),
			-webkit-radial-gradient(100% 0%, circle farthest-corner, rgba(13, 36, 64, 0.82) 10%, rgba(
							11,
							59,
							131,
							0
						)
						33%),
			-webkit-radial-gradient(10% 100%, circle farthest-corner, rgba(13, 36, 64, 0.87) 0%, rgba(
							17,
							57,
							116,
							0
						)
						26%),
			-webkit-radial-gradient(60% 55%, circle farthest-corner, rgba(42, 42, 58, 1) 15%, rgba(
							17,
							57,
							116,
							0
						)
						60%);
		background-color: #191d26;
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import transitionConfig from '../../utilities/transitions';

	import { themeMode, colors } from '../../stores';
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import LayoutContainLg from '../shared/LayoutContainLg.svelte';
	import Icon from '../shared/Icon.svelte';
	import ArrowCursorIcon from '$lib/icons/ArrowCursorIcon.svelte';
	import ComputerIcon from '$lib/icons/ComputerIcon.svelte';
	import Canvas from './Canvas.svelte';

	$: shouldAnimate = false;

	onMount(() => {
		shouldAnimate = true;
	});
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="home-top-section" class="anchor-tag"></a>
<div
	class="{`${
		$themeMode === 'dark' ? 'home-top-section-dark' : 'home-top-section-light'
	} relative flex justify-center items-center`}"
	in:fly="{{ delay: 100, duration: 100 }}"
>
	<LayoutWrapper wrapperClass="z-10">
		<LayoutContainLg>
			<div id="top-hero-container" class="min-h-[80vh] relative flex justify-center items-center">
				{#if shouldAnimate}
					<div class="flex-wrapper">
						<div class="text-container">
							<h1
								class="mb-6 text-edlOrange dark:text-edlOrange"
								in:fly="{transitionConfig(0, 350, 0, 10)}"
							>
								Hi, I'm Daniel
							</h1>
							<p
								class="hero-title text-edlDeepBlue dark:text-white md:w-10/12 xl:w-9/12 2xl:w-5/12"
								in:fly="{transitionConfig(50, 450, 0, 10)}"
							>
								I build modern web and user interfaces through front-end development
							</p>
						</div>
						<div class="mt-10 sm:mt-20 flex flex-wrap xs:flex-nowrap">
							<span class="cta-link xs:w-40" in:fly="{transitionConfig(65, 650, -10)}">
								<a href="#web-dev" rel="external">
									<Icon
										strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
										fillColor="transparent"
										width="32"
										height="32"
										name="computer-icon"
										svgClass="inline-block"
									>
										<ComputerIcon />
									</Icon>
									<h6
										class="inline-block text-edlDeepBlue dark:text-edlLtGray dark:hover:text-edlBrightBlue ml-2 slide-left-right"
									>
										Recent work
									</h6>
								</a>
							</span>
							<span
								class="w-full mt-6 xs:mt-0 xs:w-40 sm:w-auto sm:mt-0 sm:ml-14 cta-link"
								in:fly="{transitionConfig(125, 650, -10)}"
							>
								<a href="#about" rel="external">
									<Icon
										strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
										fillColor="transparent"
										width="32"
										height="32"
										name="arrow-cursor-icon"
										svgClass="inline-block"
									>
										<ArrowCursorIcon />
									</Icon>
									<h6
										class="inline-block text-edlDeepBlue dark:text-edlLtGray dark:hover:text-edlBrightBlue  slide-left-right"
									>
										About me
									</h6>
								</a>
							</span>
						</div>
					</div>
				{/if}
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
	<Canvas />
</div>
