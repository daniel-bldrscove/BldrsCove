<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../../sanityClient';
	import { fly } from 'svelte/transition';
	import viewport from '../../utilities/useViewportAction';
	import transitionConfig from '../../utilities/transitions';

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

	let transitionHeadings = false;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="web-design" class="anchor-tag"></a>
<div class="pt-16 pb-20 sm:pt-32 sm:pb-32 bg-edlPaleStone dark:bg-edlCoolSlate">
	<div class="project-container h-auto">
		<LayoutWrapper>
			<div
				class="animate-headings"
				use:viewport
				on:enterviewport="{() => (transitionHeadings = true)}"
			></div>
			{#if transitionHeadings}
				<LayoutContainLg>
					<h2 in:fly="{transitionConfig(0, 350, 0, 10)}" class="mx-auto mb-2 dark:text-white">
						Other work
					</h2>
					<h3 in:fly="{transitionConfig(50, 450, 0, 10)}" class="mb-8 text-edlOrange">
						Web Design
					</h3>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{#each webDesignProjects as webDesignProject, i}
							<div in:fly="{transitionConfig(65 * i, 650 * i, 0, -10)}">
								<WebDesignCard webDesignProject="{webDesignProject}" />
							</div>
						{/each}
					</div>
				</LayoutContainLg>
			{/if}
		</LayoutWrapper>
	</div>
</div>
