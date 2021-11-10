<script lang="ts">
	import { fly } from 'svelte/transition';
	export let coverImage: string;
	export let coverImageAlt: string;
</script>

<div class="parallax-img" transition:fly={{ y: -20, duration: 500 }}>
	<img src={coverImage} alt={coverImageAlt} class="w-full h-106 object-cover object-center" />
</div>

<style>
	.parallax-img {
		transform: translateZ(0px);
	}
</style>
