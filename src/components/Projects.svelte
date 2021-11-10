<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../sanityClient';

	import WebDevProject from '$lib/subComponents/WebDevProject.svelte';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import WebDesignCard from '$lib/subComponents/WebDesignCard.svelte';
	import devProjects from '$lib/devProjects';

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

<div class="pt-32 pb-32 dark:bg-bldrsCoveCoolGray">
	<LayoutWrapper>
		<div class="project-container h-auto">
			<h2 class="mx-auto mb-2 text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray">Featured work</h2>
			<h3 id="web-dev" class="p-spacing mb-14 text-bldrsCoveMidBlue">Wed Dev</h3>
			<div>
				{#each devProjects as devProject (devProject.title)}
					<WebDevProject {devProject} />
				{/each}
			</div>
			<h2 class="mx-auto mt-32 mb-2 dark:text-bldrsCoveLtGray">Other work</h2>
			<h3 id="web-design" class="mb-8 text-bldrsCoveMidBlue">Web Design</h3>
			<div class="grid grid-cols-2 gap-6">
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
