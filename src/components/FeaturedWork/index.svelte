<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>

<script lang="ts">
	import WebDevProject from './WebDevProject/index.svelte';
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import LayoutContainLg from '../shared/LayoutContainLg.svelte';
	import devProjects from '$lib/devProjects';
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="web-dev" class="anchor-tag"></a>
<div class="pt-16 pb- sm:pt-32 sm:pb-12 dark:bg-edlCoolGray">
	<div class="project-container h-auto">
		<LayoutWrapper>
			<LayoutContainLg>
				<h2 class="mx-auto mb-2 text-edlDeepBlue dark:text-edlLtGray">Featured work</h2>
				<h3 class="mb-14 text-edlOrange">Web Dev</h3>
			</LayoutContainLg>
		</LayoutWrapper>
		<LayoutContainLg>
			<div class="web-dev-container mx-auto xs:w-10/12 md:w-full">
				{#each devProjects as devProject (devProject.title)}
					<WebDevProject devProject="{devProject}" />
				{/each}
			</div>
		</LayoutContainLg>
	</div>
</div>
