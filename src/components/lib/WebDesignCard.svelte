<script lang="ts">
	import LayoutWrapper from './lib/LayoutWrapper.svelte';

	export let webDesignProject = {
		title: '',
		coverImage: '',
		coverImageAlt: '',
		description: '',
		projectLink: ''
	};

	let { title, coverImage, coverImageAlt, description, projectLink } = webDesignProject;
</script>

<LayoutWrapper>
	<div class="web-design-grid">
		<p>{title}</p>
		<p>{coverImage}</p>
		<p>{coverImageAlt}</p>
		<p>{description}</p>
		<p>{projectLink}</p>
	</div>
</LayoutWrapper>
