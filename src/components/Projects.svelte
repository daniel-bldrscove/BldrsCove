<script lang="ts">
	import { onMount } from 'svelte';

	import WebDevProject from './WebDevProject.svelte';
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import WebDesignCard from './lib/WebDesignCard.svelte';
	import webDevProjects from './lib/webDevProjects';
	import webDesignProjects from './lib/webDesignProjects';

	let box: any;
	let yTop = 0;
	let yHeight = 0;
	let yScroll = 0;

	function parseScroll() {
		yTop = box.scrollTop;
		yHeight = box.clientHeight;
		yScroll = box.scrollHeight;
	}

	$: yVals = {
		yTop: yTop,
		yHeight: yHeight,
		yScroll: yScroll
	};

	onMount(() => parseScroll());
</script>

<svelte:window on:scroll={parseScroll} />

<div class="pt-44 pb-44 dark:bg-bldrsCoveCoolGray">
	<LayoutWrapper>
		<div class="project-container h-auto" id="projects-section" bind:this={box}>
			<div class="titles mx-auto text-center mb-20 dark:text-bldrsCoveLtGray">
				<h2 class="mb-12">Featured Work</h2>
				<h3>Web Dev</h3>
			</div>
			<!-- <div class="report mt-96">
			<p>{yVals}</p>
			<div>vertical: {yTop} from top, box is {yHeight}px high, ({yScroll} total scroll height)</div>
		</div> -->
			<div>
				{#each webDevProjects as webDevProject (webDevProject.title)}
					<WebDevProject {webDevProject} />
				{/each}
			</div>
			<div class="titles mx-auto text-center mb-20 dark:text-bldrsCoveLtGray">
				<h3>Web Design</h3>
			</div>
			<div class="web-design-grid grid grid-cols-3">
				{#each webDesignProjects as webDesignProject (webDesignProject.title)}
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
