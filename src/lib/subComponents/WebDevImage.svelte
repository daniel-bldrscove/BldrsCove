<script lang="ts">
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	export let coverImageAlt: string;

	export let coverImage = {
		lg: null,
		md: null,
		sm: null
	};

	let lgImg = null;
	let mdImg = null;
	let smImg = null;

	onMount(() => {
		let { lg, md, sm } = coverImage;
		lgImg = lg;
		mdImg = md;
		smImg = sm;
	});
</script>

<div class="parallax-img" transition:fly={{ y: -20, duration: 500 }}>
	{#if lgImg && mdImg && smImg}
		<img
			src={lgImg}
			srcset={`
			${smImg} 640w, 
			${mdImg} 1024w, 
			${lgImg} 2000w,
		`}
			alt={coverImageAlt}
			class="w-full h-80 rounded-t-lg sm:rounded-lg sm:h-106 lg:rounded-r-none object-cover object-center"
			width="100%"
			height="100%"
			loading="lazy"
		/>
	{/if}
</div>

<style>
	.parallax-img {
		transform: translateZ(0px);
	}
</style>
