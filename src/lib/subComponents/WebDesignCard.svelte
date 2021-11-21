<script lang="ts">
	import { fade } from 'svelte/transition';
	import imageUrlBuilder from '@sanity/image-url';
	import client from '../../sanityClient';

	interface Project {
		title: string;
		coverImage: {
			alt: string;
			asset: {
				_ref: string;
				_type: string;
			};
		};
		slug: { current: string; _type: string };
	}

	export let webDesignProject: Project = {
		title: '',
		coverImage: {
			alt: '',
			asset: {
				_ref: '',
				_type: ''
			}
		},
		slug: {
			current: '',
			_type: ''
		}
	};

	const builder = imageUrlBuilder(client);
	let { title, coverImage, slug } = webDesignProject;

	function urlFor(source: { _ref: string; _type: string }) {
		return builder.image(source);
	}
</script>

<div class="sm:mb-2 sm:mt-2" in:fade={{ duration: 400 }} out:fade={{ duration: 500 }}>
	<a href={`/web-design/${slug.current}`} sveltekit:prefetch sveltekit:noscroll class="col-span-1">
		<img
			src={urlFor(coverImage.asset).format('webp').url()}
			srcset={`
				${urlFor(coverImage.asset).width(640).format('webp').url()} 640w, 
				${urlFor(coverImage.asset).width(768).format('webp').url()} 768w, 
				${urlFor(coverImage.asset).width(1024).format('webp').url()} 1024w, 
				${urlFor(coverImage.asset).width(1280).format('webp').url()} 1280w, 
				${urlFor(coverImage.asset).width(1536).format('webp').url()} 1536w, 
				${urlFor(coverImage.asset).width(2000).format('webp').url()} 2000w, 
			`}
			alt={coverImage.alt}
			loading="lazy"
			width="100%"
			height="100%"
			class="w-full h-48 rounded-lg sm:h-44 md:h-72 lg:w-106 2xl:h-96 2xl:w-full object-cover object-center shadow-md"
		/>
		<p
			class="mt-2 text-base font-medium text-bldrsCoveDeepBlue slide-left-right dark:text-ashenMidContrast-dark"
		>
			{title}
		</p>
	</a>
</div>
