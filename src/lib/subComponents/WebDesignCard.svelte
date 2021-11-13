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

<div class="sm:mb-2 sm:mt-2">
	<a href="/web-design/{slug.current}" class="col-span-1">
		<img
			src={coverImage && coverImage.asset.url}
			alt={coverImage.alt}
			class="w-full h-48 sm:h-44 md:h-72 lg:w-106 2xl:h-96 2xl:w-full object-cover object-center"
		/>
		<h5 class="mt-2 text-ashenMidContrast-light dark:text-ashenMidContrast-dark">{title}</h5>
	</a>
</div>
