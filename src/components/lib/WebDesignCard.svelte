<script lang="ts">
	import LayoutWrapper from './LayoutWrapper.svelte';
	import deltaNorthImage from '../../images/delta-north-trading-journal-cover-image.png';

	export let webDesignProject = {
		title: '',
		coverImage: '',
		coverImageAlt: '',
		description: ''
	};

	let { title, coverImage, coverImageAlt, description } = webDesignProject;
</script>

<LayoutWrapper>
	<div class="mb-12">
		<img
			src={deltaNorthImage}
			alt="generic placeholder graphic"
			class="w-full h-56 object-cover object-center"
		/>
		<a href="/web-design/{title}"><p>{title}</p></a>
	</div>
</LayoutWrapper>
