<script lang="ts">
	import { fly } from 'svelte/transition';

	import Icon from '$lib/subComponents/Icon.svelte';
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
	class="bg-gray-100 p-6 shadow-2xl lg:shadow-none rounded-b-lg sm:rounded-lg sm:p-12 lg:rounded-l-none dark:bg-bldrsCoveDeepBlue h-full flex justify-center items-center"
	transition:fly={{ y: 100, duration: 500, delay: 500 }}
>
	<div>
		<h4 class="text-bldrsCoveDeepBlue mb-4 dark:text-ashenHighContrast-dark">
			{title}
		</h4>
		<p class="text-ashenMidContrast-light mb-6 dark:text-ashenMidContrast-dark">{description}</p>
		<p class="sm-title text-bldrsCoveMidBlue mb-2">Technologies Used</p>
		<p class="caption text-ashenMidContrast-light mb-6 dark:text-ashenMidContrast-dark">
			{`${techHolder}`}
		</p>
		<span>
			<a href={gitHubLink} target="_blank" rel="external" class="inline-block">
				<span class="flex">
					<Icon
						strokeColor="transparent"
						fillColor="#2f75d6"
						width="32"
						height="32"
						name="github-icon"
						svgClass="inline-block"
					>
						<GithubIcon />
					</Icon>
					<p
						class="caption mt-1 -ml-1 text-xs slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-bldrsCoveMidBlue"
					>
						View GitHub
					</p>
				</span>
			</a>
			<a href={projectLink} target="_blank" rel="external" class="inline-block ml-8">
				<span class="flex">
					<Icon
						strokeColor="#2f75d6"
						fillColor="transparent"
						width="32"
						height="32"
						name="open-link-icon"
						svgClass="inline-block"
					>
						<OpenLinkIcon />
					</Icon>
					<p
						class="caption mt-1 -ml-1 text-xs slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-bldrsCoveMidBlue"
					>
						View Site
					</p>
				</span>
			</a>
		</span>
	</div>
</div>

<style>
</style>
