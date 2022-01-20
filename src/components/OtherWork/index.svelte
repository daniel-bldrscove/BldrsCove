<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../../sanityClient';

	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import LayoutContainLg from '../shared/LayoutContainLg.svelte';
	import WebDesignCard from './WebDesignCard.svelte';

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
<a id="web-design" class="anchor-tag"></a>
<div class="pt-16 pb-20 sm:pt-32 sm:pb-32 bg-edlPaleStone dark:bg-edlCoolSlate">
	<div class="project-container h-auto">
		<LayoutWrapper>
			<LayoutContainLg>
				<h2 class="mx-auto mb-2 dark:text-white">Other work</h2>
				<h3 class="mb-8 text-edlOrange">Web Design</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{#each webDesignProjects as webDesignProject, i}
						<WebDesignCard webDesignProject="{webDesignProject}" />
					{/each}
				</div>
			</LayoutContainLg>
		</LayoutWrapper>
	</div>
</div>
