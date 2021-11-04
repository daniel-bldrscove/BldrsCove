<script>
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import abstractImage from '../images/abstract-top-hero-image.png';
	import LayoutWrapper from '$lib/LayoutWrapper.svelte';
	import Icon from '$lib/Icon.svelte';
	import ArrowIcon from '$lib/icons/ArrowIcon.svelte';
	import ComputerIcon from '$lib/icons/ComputerIcon.svelte';

	let topHeroElement;
	let intersectingTopHero;
</script>

<div id="home" class="dark:bg-bldrsCoveCoolGray h-screen flex justify-center items-center">
	<LayoutWrapper>
		<IntersectionObserver element={topHeroElement} once bind:intersecting={intersectingTopHero}>
			<div class="grid grid-cols-12 grid-rows-3 mt-24" bind:this={topHeroElement}>
				{#if intersectingTopHero}
					<div
						class="text-container col-start-1 col-end-10 row-start-1 row-span-2 grid content-center"
					>
						<div class="text-content">
							<h1
								class="mb-6 dark:text-bldrsCoveLtGray"
								transition:fade={{ delay: 100, duration: 100 }}
							>
								Hello, I'm Daniel.
							</h1>
							<h2
								class="dark:text-bldrsCoveLtGray"
								transition:fade={{ delay: 100, duration: 1200 }}
							>
								I build interactive experiences on the web through UI and modern javascript
								technologies.
							</h2>
						</div>
					</div>
					<div
						class="hero-image col-end-13 col-span-6 row-start-1 row-span-2 object-cover -z-10"
						transition:fade={{ delay: 350, duration: 1200 }}
					>
						<img src={abstractImage} alt="Developer coding away" class="opacity-30" />
					</div>
					<div class="w-full col-span-5 row-start-3 row-span-1 grid content-end">
						<div class="flex">
							<span class="cta-link" transition:fade={{ delay: 200, duration: 300 }}>
								<Icon
									strokeColor="#656870"
									fillColor="transparent"
									width="32"
									height="32"
									name="arrow-icon"
									svgClass="inline-block"
								>
									<ArrowIcon />
								</Icon>
								<h6 class="inline-block dark:text-bldrsCoveLtGray">About me</h6>
							</span>
							<span class="cta-link ml-12" transition:fade={{ delay: 300, duration: 600 }}>
								<Icon
									strokeColor="#656870"
									fillColor="transparent"
									width="32"
									height="32"
									name="computer-icon"
									svgClass="inline-block"
								>
									<ComputerIcon />
								</Icon>
								<h6 class="inline-block dark:text-bldrsCoveLtGray">Recent work</h6>
							</span>
						</div>
					</div>
				{/if}
			</div>
		</IntersectionObserver>
	</LayoutWrapper>
</div>
