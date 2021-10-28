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

<LayoutWrapper>
	<div class="mt-44 mb-44 project-container h-auto" id="projects-section" bind:this={box}>
		<div class="titles mx-auto text-center mb-20">
			<h2 class="mb-12">Recent Projects</h2>
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
		<div class="titles mx-auto text-center mb-20">
			<h3>Sole Web Design</h3>
		</div>
		<div>
			{#each webDesignProjects as webDesignProject (webDesignProject.title)}
				<WebDesignCard {webDesignProject} />
			{/each}
		</div>
	</div>
</LayoutWrapper>

<style>
	.project-container {
		perspective: 8px;
		perspective-origin: 0%;
	}
</style>
