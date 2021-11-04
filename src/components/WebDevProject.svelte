<script>
	import WebDevImage from './lib/WebDevImage.svelte';
	import WebDevCard from './lib/WebDevCard.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	export let webDevProject = {
		title: '',
		coverImage: '',
		coverImageAlt: '',
		description: '',
		techStack: [],
		gitHubLink: '',
		projectLink: ''
	};
	let { title, coverImage, coverImageAlt, description, techStack, gitHubLink, projectLink } =
		webDevProject;

	let devProjectImage;
	let intersectingDevImage;

	let devProjectCard;
	let intersectingDevCard;
</script>

<div class="project-container w-full mx-auto">
	<div class="grid grid-cols-12 mt-12 mb-12">
		<div
			class="absolute w-106 h-106 bg-bldrsCoveLtBabyBlue blur-3xl rounded-full justify-self-center self-center -z-10"
		/>
		<div class="col-start-1 col-span-7 row-start-1 row-span-3 -z-10">
			<IntersectionObserver element={devProjectImage} once bind:intersecting={intersectingDevImage}>
				<div bind:this={devProjectImage}>
					{#if intersectingDevImage}
						<WebDevImage {coverImage} {coverImageAlt} />
					{/if}
				</div>
			</IntersectionObserver>
		</div>
		<div class="col-end-13 col-span-7 row-end-6 row-span-3">
			<IntersectionObserver element={devProjectCard} once bind:intersecting={intersectingDevCard}>
				<div bind:this={devProjectCard}>
					{#if intersectingDevCard}
						<WebDevCard {title} {description} {techStack} {gitHubLink} {projectLink} />
					{/if}
				</div>
			</IntersectionObserver>
		</div>
	</div>
</div>
