<script lang="ts">
	import type { CustomBlockComponentProps } from '$lib/types/pTRendererTypes';
	import imageUrlBuilder from '@sanity/image-url';
	import client from '../../../../sanityClient';

	// Portable Text component not currently used. Keeping for future.
	export let portableText: CustomBlockComponentProps<{
		alt: string;
		asset?: {
			_ref: string;
			_type: string;
		};
	}>;

	const builder = imageUrlBuilder(client);

	function urlFor(source: { _ref: string; _type: string }) {
		return builder.image(source);
	}

	$: ({ value } = portableText);
	$: imgAltTxt = value.alt;
	$: imgAsset = value.asset!;
</script>

<figure class="mt-4 mb-4">
	<img
		src="{urlFor(imgAsset).format('webp').url()}"
		srcset="{`
			${urlFor(imgAsset).width(640).format('webp').url()} 640w, 
			${urlFor(imgAsset).width(768).format('webp').url()} 768w, 
			${urlFor(imgAsset).width(1024).format('webp').url()} 1024w, 
			${urlFor(imgAsset).width(1280).format('webp').url()} 1280w, 
			${urlFor(imgAsset).width(1536).format('webp').url()} 1536w, 
			${urlFor(imgAsset).width(2000).format('webp').url()} 2000w, 
		`}"
		alt="{imgAltTxt}"
		loading="lazy"
		width="100%"
		height="100%"
		class="rounded-lg"
	/>
</figure>
