<script lang="ts">
	import type { DevProjectTypes } from '../../../../types/ComponentTypes';
	export let coverImage: DevProjectTypes['coverImage'];
	export const { lg, md, sm } = coverImage;
	export let coverImageAlt: DevProjectTypes['coverImageAlt'];
</script>

<div
	class="shadow-2xl rounded-lg lg:shadow-none lg:rounded-l-lg lg:rounded-r-none bg-edlPaleStone dark:bg-edlCoolSlate">
	{#if typeof sm === 'string'}
		<img
			src="{sm}"
			srcset="{`
			${sm} 640w, 
			${md} 1024w, 
			${lg} 2000w,
		`}"
			alt="{coverImageAlt}"
			class="w-full h-80 rounded-t-lg bg-transparent sm:rounded-lg sm:h-106 lg:rounded-r-none object-contain object-center"
			width="100%"
			height="100%"
			loading="lazy" />
	{/if}
</div>
