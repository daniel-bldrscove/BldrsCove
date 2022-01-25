<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import viewport from '../../utilities/useViewportAction';
	import transitionConfig from '../../utilities/transitions';

	import WebDevProject from './WebDevProject/index.svelte';
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import LayoutContainLg from '../shared/LayoutContainLg.svelte';
	import devProjects from '$lib/devProjects';

	let animHeadings = false;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="web-dev" class="anchor-tag"></a>
<div class="pt-16 pb-2 sm:pt-32 sm:pb-12 min-h-[60rem] dark:bg-edlCoolGray">
	<div class="project-container h-auto">
		<LayoutWrapper>
			<div
				class="animate-headings-signal"
				use:viewport
				on:enterviewport="{() => (animHeadings = true)}"
			></div>
			{#if animHeadings}
				<LayoutContainLg>
					<h2
						class="mx-auto mb-2 text-edlDeepBlue dark:text-white"
						in:fly="{transitionConfig(300, 500, 0, 10)}"
					>
						Front-end Dev
					</h2>
					<h3 class="mb-14 text-edlOrange" in:fly="{transitionConfig(50, 450, 0, 10)}">
						Featured work
					</h3>
				</LayoutContainLg>
			{/if}
		</LayoutWrapper>
		<LayoutContainLg>
			<div class="web-dev-container mx-auto xs:w-10/12 md:w-full">
				{#each devProjects as devProject, i}
					<div>
						<WebDevProject devProject="{devProject}" />
					</div>
				{/each}
			</div>
		</LayoutContainLg>
	</div>
</div>
