<script lang="ts">
	import WebDevProject from './subComponents/WebDevProject.svelte';
	import LayoutWrapper from './subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from './subComponents/LayoutContainLg.svelte';
	import devProjects from '$lib/devProjects';
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="web-dev" class="anchor-tag" />
<div class="pt-16 pb- sm:pt-32 sm:pb-12 dark:bg-bldrsCoveCoolGray">
	<div class="project-container h-auto">
		<LayoutWrapper>
			<LayoutContainLg>
				<h2 class="mx-auto mb-2 text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray">Featured work</h2>
				<h3 class="mb-14 text-bldrsCoveMidBlue">Web Dev</h3>
			</LayoutContainLg>
		</LayoutWrapper>
		<LayoutContainLg>
			<div class="web-dev-container mx-auto xs:w-10/12 md:w-full">
				{#each devProjects as devProject (devProject.title)}
					<WebDevProject {devProject} />
				{/each}
			</div>
		</LayoutContainLg>
	</div>
</div>

<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>
