<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../sanityClient';

	import WebDevProject from './WebDevProject.svelte';
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import WebDesignCard from './lib/WebDesignCard.svelte';
	import webDevProjects from './lib/webDevProjects';

	let webDesignProjects = [];
	console.log('webDesignProjects', webDesignProjects);

	onMount(async () => {
		const query = `*[_type == 'web-design-project']{
			coverImage{
				alt,
				asset->{
					assetId,
					originalFilename,
					url,
					size
				},
				_type,
			},
			description,
			project_link,
			slug,
			title,
			_createdAt,
			_id,
			_type,
			_updatedAt,
		}`;
		await client
			.fetch(query)
			.then((data) => {
				// console.log('Data: ', data);
				if (data.length > 0) {
					console.log('Incoming data: ', data);
					webDesignProjects = data;
				}
			})
			.catch((error) => {
				console.log('Encountered error when fetching content: ', error);
				throw new Error(error);
			});
	});
</script>

<!-- <svelte:window on:scroll={parseScroll} /> -->

<div class="pt-28 pb-28 dark:bg-bldrsCoveCoolGray">
	<LayoutWrapper>
		<div class="project-container h-auto">
			<h2 class="mx-auto text-center mb-24 dark:text-bldrsCoveLtGray">Featured Work</h2>
			<h3 id="web-dev">Web Dev</h3>
			<hr />
			<div>
				{#each webDevProjects as webDevProject (webDevProject.title)}
					<WebDevProject {webDevProject} />
				{/each}
			</div>
			<h3 class="mt-24" id="web-design">Web Design</h3>
			<hr />
			<div class="grid grid-cols-2 gap-6 mt-12">
				{#each webDesignProjects as webDesignProject, i}
					<WebDesignCard {webDesignProject} />
				{/each}
			</div>
		</div>
	</LayoutWrapper>
</div>

<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>
