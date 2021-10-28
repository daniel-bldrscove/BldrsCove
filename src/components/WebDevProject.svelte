<script>
	import WebDevImage from './lib/WebDevImage.svelte';
	import WebDevCard from './lib/WebDevCard.svelte';
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
</script>

<div class="project-container w-full mx-auto">
	<div class="grid grid-cols-12 grid-rows-4 mt-24 mb-60">
		<div class="col-start-1 col-span-7 row-start-1 row-span-3 grid content-start -z-10">
			<WebDevImage {coverImage} {coverImageAlt} />
		</div>
		<div class="col-end-13 col-span-7 row-end-5 row-span-3 grid content-end">
			<WebDevCard {title} {description} {techStack} {gitHubLink} {projectLink} />
		</div>
	</div>
</div>
