<script lang="ts">
	import { browser } from '$app/env';
	import type { DevProjectTypes } from '../../../../types/ComponentTypes';
	import { fly } from 'svelte/transition';
	import viewport from '../../../utilities/useViewportAction';
	import transitionConfig from '../../../utilities/transitions';

	import WebDevImage from './WebDevImage.svelte';
	import WebDevCard from './WebDevCard.svelte';

	export let devProject: DevProjectTypes;
	if (typeof devProject === undefined) {
		throw new Error('Dev Project is undefined!');
	}

	export let { coverImage, coverImageAlt, ...rest } = devProject;
	let animProjectSection = false;
</script>

<div>
	<div
		class="animate-project-section-signal"
		use:viewport
		on:enterviewport="{() => (animProjectSection = true)}"
	></div>
	{#if animProjectSection}
		<div
			in:fly="{transitionConfig(0, 0, 0, 0)}"
			class="flex flex-wrap lg:shadow-2xl lg:rounded-lg sm:justify-end mb-20 md:grid md:grid-cols-12 md:grid-rows-6"
		>
			<div
				class="w-full -z-10 md:col-start-1 md:col-span-9 md:row-start-1 md:row-span-4 lg:col-span-6 lg:row-span-6"
			>
				{#if browser && coverImage && coverImageAlt}
					<WebDevImage coverImage="{coverImage}" coverImageAlt="{coverImageAlt}" />
				{/if}
			</div>
			<div
				class="w-full h-full sm:w-5/6 sm:-mt-20 md:col-end-13 md:col-span-10 md:justify-self-end md:row-start-3 md:row-span-4 self-end lg:w-full lg:col-end-13 lg:col-span-6 lg:row-span-6 "
			>
				<WebDevCard devProjectProps="{{ ...rest }}" />
			</div>
		</div>
	{/if}
</div>
