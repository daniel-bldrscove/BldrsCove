<script lang="ts">
	interface Project {
		title: string;
		coverImage: {
			alt: string;
			asset: {
				assetId: string;
				originalFilename: string;
				size: number;
				url: string;
			};
			_type: string;
		};
		description: [];
		projectLink: string;
		slug: { current: string; _type: string };
	}

	export let webDesignProject: Project = {
		title: '',
		coverImage: {
			alt: '',
			asset: {
				assetId: '',
				originalFilename: '',
				size: null,
				url: ''
			},
			_type: ''
		},
		description: [],
		projectLink: '',
		slug: {
			current: '',
			_type: ''
		}
	};

	let { title, coverImage, slug } = webDesignProject;
</script>

<div class="mb-2 mt-2">
	<a href="/web-design/{slug.current}" class="dark:text-bldrsCoveLtGray col-span-1">
		<img
			src={coverImage && coverImage.asset.url}
			alt={coverImage.alt}
			class="w-full h-56 object-cover object-center"
		/>
		<h5 class="mt-2 text-ashenMidContrast-light">{title}</h5>
	</a>
</div>
