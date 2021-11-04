<script lang="ts">
	import { fly } from 'svelte/transition';

	import Icon from '$lib/Icon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import OpenLinkIcon from '$lib/icons/OpenLinkIcon.svelte';

	export let title: string;
	export let description: string;
	export let techStack: string[];
	export let gitHubLink: string;
	export let projectLink: string;

	let techHolder = JSON.stringify(techStack);
</script>

<div
	class="shadow-2xl bg-gray-100 p-12 dark:bg-ashenLowContrast-dark"
	transition:fly={{ y: 100, duration: 500, delay: 500 }}
>
	<h4 class="text-ashenHighContrast-light mb-4 dark:text-ashenHighContrast-dark">{title}</h4>
	<p class="text-ashenMidContrast-light mb-4 dark:text-bldrsCoveLtGray">{description}</p>
	<p class="sm-title text-ashenLowContrast-light mb-4">Technologies Used</p>
	<p class="caption text-ashenMidContrast-light mb-4 dark:text-bldrsCoveLtGray">
		{`${techHolder}`}
	</p>
	<span>
		<a href={gitHubLink} class="inline-block">
			<Icon
				strokeColor="transparent"
				fillColor="#656870"
				width="32"
				height="32"
				name="github-icon"
				svgClass="inline-block"
			>
				<GithubIcon />
			</Icon>
		</a>
		<a href={projectLink} class="inline-block ml-4">
			<Icon
				strokeColor="#656870"
				fillColor="transparent"
				width="32"
				height="32"
				name="open-link-icon"
				svgClass="inline-block"
			>
				<OpenLinkIcon />
			</Icon>
		</a>
	</span>
</div>

<style>
</style>
