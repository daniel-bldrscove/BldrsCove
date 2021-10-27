<script lang="ts">
	import { onMount } from 'svelte';

	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import WebDevProject from './WebDevProject.svelte';
	import bbsCoverImage from '../images/bbs-build-beautiful-spaces.jpg';
	import deltaNorthCoverImage from '../images/delta-north-trading-journal-cover-image.png';

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

	const projects: {
		title: string;
		coverImage: string;
		coverImageAlt: string;
		description: string;
		techStack: string[];
		gitHubLink: string;
		projectLink: string;
	}[] = [
		{
			title: 'BBS Portfolio Website',
			coverImage: bbsCoverImage,
			coverImageAlt: 'BBS logo overlaid on beautiful wall',
			description:
				'Clean and snappy photo portfolio for a small restoration and renovation company. Due to the site being image heavy, a fast solution that leveraged caching and lazy loading was used along with pagination for the main work page. File upload and email integration was also added for ease of contact.',
			techStack: ['Gatsby', 'Slider JS', 'Framer Motion', 'Cloudinary', 'SendGrid'],
			gitHubLink: 'https://github.com/tgdpez/BBS-Website',
			projectLink: 'https://buildbeautifulspaces.com'
		},
		{
			title: 'Delta North Trading Journal',
			coverImage: deltaNorthCoverImage,
			coverImageAlt: 'Woman working the Delta North trading journal app',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			techStack: ['React', 'Node JS', 'TD Ameritrade API', 'React Query', 'Material UI'],
			gitHubLink: 'https://github.com/tgdpez/TradingJournal',
			projectLink: 'https://deltanorthtradingjournal.com'
		}
	];
</script>

<svelte:window on:scroll={parseScroll} />

<LayoutWrapper>
	<div class="mt-44 mb-44 project-container h-auto" id="projects-section" bind:this={box}>
		<div class="titles mx-auto text-center mb-20">
			<h2 class="mb-12">Recent Projects</h2>
			<h3>Web Dev</h3>
		</div>
		<div class="report mt-96">
			<p>{yVals}</p>
			<div>vertical: {yTop} from top, box is {yHeight}px high, ({yScroll} total scroll height)</div>
		</div>
		<div>
			{#each projects as project (project.title)}
				<WebDevProject {project} />
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
