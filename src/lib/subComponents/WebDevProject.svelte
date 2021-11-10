<script>
	import WebDevImage from '$lib/subComponents/WebDevImage.svelte';
	import WebDevCard from '$lib/subComponents/WebDevCard.svelte';

	export let devProject = {
		title: '',
		coverImage: '',
		coverImageAlt: '',
		description: '',
		techStack: [],
		gitHubLink: '',
		projectLink: ''
	};
	let { title, coverImage, coverImageAlt, description, techStack, gitHubLink, projectLink } =
		devProject;

	// import IntersectionObserver from 'svelte-intersection-observer';
	// let devProjectImage;
	// let intersectingDevImage;
	// let devProjectCard;
	// let intersectingDevCard;
</script>

<!-- <IntersectionObserver element={devProjectImage} once bind:intersecting={intersectingDevImage}>
	<div bind:this={devProjectImage}>
		{#if intersectingDevImage}
			<WebDevImage {coverImage} {coverImageAlt} />
		{/if}
	</div>
</IntersectionObserver> -->
<!-- <IntersectionObserver element={devProjectCard} once bind:intersecting={intersectingDevCard}>
	<div bind:this={devProjectCard}>
		{#if intersectingDevCard}
			<WebDevCard {title} {description} {techStack} {gitHubLink} {projectLink} />
		{/if}
	</div>
</IntersectionObserver> -->

<div class="flex flex-wrap justify-end mb-20">
	<div class="w-full -z-10">
		<WebDevImage {coverImage} {coverImageAlt} />
	</div>
	<div class="w-5/6 -mt-20">
		<WebDevCard {title} {description} {techStack} {gitHubLink} {projectLink} />
	</div>
</div>
