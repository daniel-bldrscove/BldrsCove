<script lang="ts">
	import { onMount } from 'svelte';

	export let coverImageAlt: string;
	export let coverImage: {
		lg: string;
		md: string;
		sm: string;
	} = {
		lg: null,
		md: null,
		sm: null
	};

	let lgImg = '';
	let mdImg = null;
	let smImg = null;

	onMount(() => {
		let { lg, md, sm } = coverImage;
		lgImg = lg;
		mdImg = md;
		smImg = sm;
	});
</script>

<div
	class="shadow-2xl rounded-lg lg:shadow-none lg:rounded-l-lg lg:rounded-r-none bg-bldrsCovePaleStone dark:bg-bldrsCoveCoolSlate"
>
	{#if lgImg && mdImg && smImg}
		<img
			src={smImg}
			srcset={`
			${smImg} 640w, 
			${mdImg} 1024w, 
			${lgImg} 2000w,
		`}
			alt={coverImageAlt}
			class="w-full h-80 rounded-t-lg bg-transparent sm:rounded-lg sm:h-106 lg:rounded-r-none object-contain object-center"
			width="100%"
			height="100%"
			loading="lazy"
		/>
	{/if}
</div>

<style>
</style>
