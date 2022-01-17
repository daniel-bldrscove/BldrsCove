<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../sanityClient';

	import LayoutWrapper from './subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from './subComponents/LayoutContainLg.svelte';
	import WebDesignCard from './subComponents/WebDesignCard.svelte';

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
		<!-- svelte-ignore a11y-missing-content -->
		<a id="web-design" class="anchor-tag" />
		<LayoutWrapper>
			<LayoutContainLg>
				<h2 class="mx-auto mb-2 dark:text-bldrsCoveLtGray">Other work</h2>
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
