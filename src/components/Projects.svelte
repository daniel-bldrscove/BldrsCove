<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../sanityClient';

	import WebDevProject from '$lib/subComponents/WebDevProject.svelte';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from '$lib/subComponents/LayoutContainLg.svelte';
	import WebDesignCard from '$lib/subComponents/WebDesignCard.svelte';
	import devProjects from '$lib/devProjects';

	let webDesignProjects = [];
	// $: console.log('Web Design Projects: ', webDesignProjects);

	onMount(async () => {
		const query = `*[_type == 'web-design-project'] | order(projectOrder asc){
			coverImage{
				alt,
				asset
			},
			slug,
			title,
		}`;
		await client
			.fetch(query)
			.then((data) => {
				if (data.length > 0) {
					// console.log('Incoming data: ', data);
					webDesignProjects = data;
				}
			})
			.catch((error) => {
				console.log('Encountered error when fetching content: ', error);
				throw new Error(error);
			});
	});
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="web-dev" class="anchor-tag" />
<div class="pt-16 pb-16 sm:pt-32 sm:pb-32 dark:bg-bldrsCoveCoolGray">
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

		<!-- svelte-ignore a11y-missing-content -->
		<a id="web-design" class="anchor-tag" />
		<LayoutWrapper>
			<LayoutContainLg>
				<h2 class="mx-auto mt-16 sm:mt-32 mb-2 dark:text-bldrsCoveLtGray">Other work</h2>
				<h3 class="mb-8 text-bldrsCoveMidBlue">Web Design</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{#each webDesignProjects as webDesignProject, i}
						<WebDesignCard {webDesignProject} />
					{/each}
				</div>
			</LayoutContainLg>
		</LayoutWrapper>
	</div>
</div>

<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>
