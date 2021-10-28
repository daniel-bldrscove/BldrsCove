<script lang="ts">
	export let coverImage: string;
	export let coverImageAlt: string;
</script>

<div class="parallax-img">
	<img src={coverImage} alt={coverImageAlt} class="w-full h-106 object-cover object-center" />
</div>

<style>
	.parallax-img {
		transform: translateZ(0px);
	}
</style>
