<script>
	import { fade } from 'svelte/transition';
	import { themeMode, colors } from '../stores';
	import LayoutWrapper from './shared/LayoutWrapper.svelte';
	import LayoutContainLg from './shared/LayoutContainLg.svelte';
	import Icon from './shared/Icon.svelte';
	import ArrowCursorIcon from '$lib/icons/ArrowCursorIcon.svelte';
	import ComputerIcon from '$lib/icons/ComputerIcon.svelte';
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="home-top-section" class="anchor-tag"></a>
<div
	class="bg-edlPaleStone dark:bg-edlCoolSlate flex justify-center items-center"
	transition:fade="{{ delay: 100, duration: 100 }}">
	<LayoutWrapper>
		<LayoutContainLg>
			<div class="hero-container min-h-[80vh] relative flex justify-center items-center">
				<div class="flex-wrapper">
					<div class="text-container">
						<h1
							class="mb-6 text-edlOrange dark:text-edlOrange"
							transition:fade="{{ delay: 100, duration: 100 }}">
							Hi, I'm Daniel.
						</h1>
						<h2
							class="text-edlDeepBlue dark:text-white md:w-10/12 xl:w-9/12 2xl:w-5/12"
							transition:fade="{{ delay: 100, duration: 1200 }}">
							I build modern user interfaces through front end web development
						</h2>
					</div>
					<div class="mt-20 flex flex-wrap">
						<span class="cta-link" transition:fade="{{ delay: 200, duration: 300 }}">
							<a href="#web-dev" rel="external">
								<Icon
									strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
									fillColor="transparent"
									width="32"
									height="32"
									name="computer-icon"
									svgClass="inline-block">
									<ComputerIcon />
								</Icon>
								<h6
									class="inline-block text-edlDeepBlue dark:text-edlLtGray dark:hover:text-edlBrightBlue ml-2 slide-left-right">
									Recent work
								</h6>
							</a>
						</span>
						<span
							class="w-full mt-6 sm:w-auto sm:mt-0 sm:ml-14 cta-link"
							transition:fade="{{ delay: 300, duration: 600 }}">
							<a href="#about" rel="external">
								<Icon
									strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
									fillColor="transparent"
									width="32"
									height="32"
									name="arrow-cursor-icon"
									svgClass="inline-block">
									<ArrowCursorIcon />
								</Icon>
								<h6
									class="inline-block text-edlDeepBlue dark:text-edlLtGray dark:hover:text-edlBrightBlue  slide-left-right">
									About me
								</h6>
							</a>
						</span>
					</div>
				</div>
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>
