<script lang="ts">
	import { slide } from 'svelte/transition';
	import viewport from '$lib/utilities/useViewportAction';
	import { colors } from '../../../../stores';
	export let devProjectProps: Omit<DevProjectTypes, 'coverImage' | 'coverImageAlt'>;
	export let { title, subhead, description, excerpt, techStack, gitHubLink, projectLink } =
		devProjectProps;

	import Accordion from '../Accordion.svelte';
	import Icon from '../Icon.svelte';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svelte';
	import OpenLinkIcon from '$lib/assets/icons/OpenLinkIcon.svelte';
	import TableCallout from '../TableCallout/index.svelte';
	import type { DevProjectTypes } from '$lib/types/projectTypes';

	export let showAccordion = false;
</script>

<div
	class="h-full bg-gray-100 dark:bg-edlDeepBlue p-6 shadow-2xl lg:shadow-none rounded-b-lg sm:rounded-lg sm:p-12 lg:rounded-l-none flex justify-center items-center"
>
	<div class="animate-card-signal" use:viewport></div>
	<div class="{`h-auto ${showAccordion ? 'pt-8 pb-8' : ''}`}">
		<h4 class="text-edlDeepBlue dark:text-ashenHighContrast-dark">
			{title}
		</h4>
		<p class="sm-title mt-1 mb-8 text-ashenMidContrast-light">
			{subhead}
		</p>
		<span>
			<a href="{gitHubLink}" target="_blank" rel="external" class="inline-block">
				<span class="flex">
					<Icon
						strokeColor="{$colors.midBlue}"
						fillColor="#2f75d6"
						width="32"
						height="32"
						name="github-icon"
						svgClass="inline-block"
					>
						<GithubIcon />
					</Icon>
					<p
						class="font-niveauGrotesk font-medium text-sm mt-[2px] -ml-1 slide-left-right dark:hover:text-edlBrightBlue"
					>
						View GitHub
					</p>
				</span>
			</a>
			<a href="{projectLink}" target="_blank" rel="external" class="inline-block ml-8">
				<span class="flex">
					<Icon
						strokeColor="{$colors.midBlue}"
						fillColor="transparent"
						width="32"
						height="32"
						name="open-link-icon"
						svgClass="inline-block"
					>
						<OpenLinkIcon />
					</Icon>
					<p
						class="font-niveauGrotesk font-medium text-sm mt-[2px] -ml-1 slide-left-right dark:hover:text-edlBrightBlue"
					>
						View Site
					</p>
				</span>
			</a>
		</span>
		<Accordion bind:showAccordion="{showAccordion}">
			<p id="dev-card-excerpt" class="inline text-[0.95rem] leading-[1.35rem] mr-2">
				{excerpt}
			</p>
			{#if showAccordion}
				<div transition:slide|global class="mt-6 mb-6">
					<p id="dev-card-content" class="text-[0.95rem] leading-[1.35rem]">
						{description}
					</p>
				</div>
			{/if}
		</Accordion>

		<p class="sm-title font-sans font-bold mb-2 tracking-wider">Technologies Used</p>
		<TableCallout
			tblClass="callout-table"
			tblTdClass="bg-white dark:bg-edlCoolSlate"
			tableData="{techStack}"
			showCols="{false}"
		/>
	</div>
</div>
