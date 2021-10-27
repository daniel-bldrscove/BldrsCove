<script lang="ts">
	import { onMount } from 'svelte';

	import gitHubIcon from '../../images/icons/github-icon.svg';
	import openLinkIcon from '../../images/icons/open-link-icon.svg';
	import cornerIconTL from '../../images/icons/dev-card-corners/card-corner-tl.svg';
	import cornerIconTR from '../../images/icons/dev-card-corners/card-corner-tr.svg';
	import cornerIconBL from '../../images/icons/dev-card-corners/card-corner-bl.svg';
	import cornerIconBR from '../../images/icons/dev-card-corners/card-corner-br.svg';

	export let title: string;
	export let description: string;
	export let techStack: string[];
	export let gitHubLink: string;
	export let projectLink: string;
	let techHolder = JSON.stringify(techStack);
</script>

<div class="relative parallax-card bg-gray-100 p-12 shadow-2xl">
	<div class="card-corners">
		<img src={cornerIconTL} alt="GitHub Icon" class="absolute top-4 left-4" />
		<img src={cornerIconTR} alt="GitHub Icon" class="absolute top-4 right-4" />
		<img src={cornerIconBL} alt="GitHub Icon" class="absolute bottom-4 left-4" />
		<img src={cornerIconBR} alt="GitHub Icon" class="absolute bottom-4 right-4" />
	</div>
	<h4 class="text-ashenHighContrast-light mb-4">{title}</h4>
	<p class="text-ashenMidContrast-light mb-4">{description}</p>
	<p class="sm-title text-ashenLowContrast-light mb-4">Technologies Used</p>
	<p class="caption text-ashenMidContrast-light mb-4">{`${techHolder}`}</p>
	<span>
		<a href={gitHubLink} class="inline-block">
			<img src={gitHubIcon} alt="GitHub Icon" />
		</a>
		<a href={projectLink} class="inline-block ml-4">
			<img src={openLinkIcon} alt="Open external link icon" />
		</a>
	</span>
</div>

<style>
	.parallax-card {
		transform: translateZ(3px);
	}
</style>
