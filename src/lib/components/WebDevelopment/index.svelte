<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import viewport from '$lib/utilities/useViewportAction';
	import transitionConfig from '$lib/utilities/transitions';
	import CardSections from '../shared/ImageCard/index.svelte';
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import LayoutContainLg from '../shared/LayoutContainLg.svelte';
	import devProjects from '$lib/assets/devProjects';

	let transitionHeadings = false;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="web-dev" class="anchor-tag"></a>
<div class="pt-16 pb-2 sm:pt-32 sm:pb-12 min-h-[60rem] dark:bg-edlCoolGray">
	<div
		class="project-container h-auto animate-headings"
		use:viewport
		on:enterViewport="{() => {
			transitionHeadings = true;
		}}"
	>
		<LayoutWrapper>
			{#if transitionHeadings}
				<LayoutContainLg>
					<h3 class="mb-2 text-edlOrange" in:fly|global="{transitionConfig(50, 450, 0, 10)}">
						Featured work
					</h3>
					<h2
						class="mx-auto mb-8 text-edlDeepBlue dark:text-white"
						in:fly|global="{transitionConfig(300, 500, 0, 10)}"
					>
						Front-end Web Development
					</h2>
				</LayoutContainLg>
			{/if}
		</LayoutWrapper>
		<LayoutContainLg>
			<div class="web-dev-container mx-auto xs:w-10/12 md:w-full">
				{#each devProjects as devProject, i}
					<div>
						<CardSections devProject="{devProject}" />
					</div>
				{/each}
			</div>
		</LayoutContainLg>
	</div>
</div>
