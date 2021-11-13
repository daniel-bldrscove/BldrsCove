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

<div class="flex flex-wrap sm:justify-end mb-20 md:grid md:grid-cols-12 md:grid-rows-6">
	<div
		class="w-full -z-10 md:col-start-1 md:col-span-9 md:row-start-1 md:row-span-4 lg:col-span-6 lg:row-span-6"
	>
		<WebDevImage {coverImage} {coverImageAlt} />
	</div>
	<div
		class="w-full h-full sm:w-5/6 sm:-mt-20 md:col-end-13 md:col-span-10 md:justify-self-end md:row-start-3 md:row-span-4 self-end lg:w-full lg:col-end-13 lg:col-span-6 lg:row-span-6 "
	>
		<WebDevCard {title} {description} {techStack} {gitHubLink} {projectLink} />
	</div>
</div>
