<script lang="ts">
	import { fly } from 'svelte/transition';
	import LayoutWrapper from './LayoutWrapper.svelte';
	export let handleMobileMenu: any;
</script>

<div
	id="mobile-menu"
	class="absolute top-[6rem] sm:hidden w-full drop-shadow-2xl"
	transition:fly={{ y: -15, duration: 250 }}
>
	<div
		class="mobile-menu-wrapper bg-[#acbac3] pt-10 pb-10 rounded-b-2xl flex justify-center items-center dark:bg-bldrsCoveCoolGray"
	>
		<LayoutWrapper>
			<div class="mobile-nav-items w-full flex flex-wrap">
				<button
					class="nav-btn text-ashenHighContrast-light"
					on:click={() => handleMobileMenu(`#home-top-section`)}
				>
					<h5 class="nav-item">Home</h5>
				</button>
				<button
					class="nav-btn text-ashenHighContrast-light"
					on:click={() => handleMobileMenu(`#about`)}
				>
					<h5 class="nav-item">About</h5>
				</button>
				<button
					class="nav-btn text-ashenHighContrast-light"
					on:click={() => handleMobileMenu(`#web-dev`)}
				>
					<h5 class="nav-item">Web Dev Projects</h5>
				</button>
				<button
					class="nav-btn text-ashenHighContrast-light"
					on:click={() => handleMobileMenu(`#web-design`)}
				>
					<h5 class="nav-item">Web Design Projects</h5>
				</button>
				<button
					class="nav-btn text-ashenHighContrast-light"
					on:click={() => handleMobileMenu(`#contact`)}
				>
					<h5 class="nav-item">Contact</h5>
				</button>
			</div>
		</LayoutWrapper>
	</div>
</div>

<style>
	.nav-btn {
		@apply block h-16 w-full text-left mt-3 mb-3 p-3 border border-ashenLowContrast-light rounded-md focus:outline-none focus:ring-2 focus:ring-bldrsCoveMidBlue focus:border-transparent bg-[#e3eaf1] focus:bg-gray-100 hover:bg-gray-100;
	}
</style>
