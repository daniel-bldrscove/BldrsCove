<script>
	import WebDevImage from './lib/WebDevImage.svelte';
	import WebDevCard from './lib/WebDevCard.svelte';
	export let project = {
		title: '',
		coverImage: '',
		coverImageAlt: '',
		description: '',
		techStack: [],
		gitHubLink: '',
		projectLink: ''
	};
	let { title, coverImage, coverImageAlt, description, techStack, gitHubLink, projectLink } =
		project;
</script>

<div class="project-container w-full mx-auto">
	<div class="grid grid-cols-12 grid-rows-6 mt-22 mb-60">
		<div class="col-start-1 col-span-7 row-start-1 row-span-5 grid content-center -z-10">
			<WebDevImage {coverImage} {coverImageAlt} />
		</div>
		<div class="col-end-13 col-span-7 row-end-7 row-span-3">
			<WebDevCard {title} {description} {techStack} {gitHubLink} {projectLink} />
		</div>
	</div>
</div>
