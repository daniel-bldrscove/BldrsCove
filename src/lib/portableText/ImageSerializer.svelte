<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';
	import imageUrlBuilder from '@sanity/image-url';
	import client from '../../sanityClient';

	export let portableText: BlockProps<{
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

	// console.log('Image serializer PT: ', portableText);

	$: imgAltTxt = portableText.block.alt;
</script>

<figure class="mt-4 mb-4">
	<img
		src="{urlFor(portableText.block.asset).format('webp').url()}"
		srcset="{`
			${urlFor(portableText.block.asset).width(640).format('webp').url()} 640w, 
			${urlFor(portableText.block.asset).width(768).format('webp').url()} 768w, 
			${urlFor(portableText.block.asset).width(1024).format('webp').url()} 1024w, 
			${urlFor(portableText.block.asset).width(1280).format('webp').url()} 1280w, 
			${urlFor(portableText.block.asset).width(1536).format('webp').url()} 1536w, 
			${urlFor(portableText.block.asset).width(2000).format('webp').url()} 2000w, 
		`}"
		alt="{imgAltTxt}"
		loading="lazy"
		width="100%"
		height="100%"
		class="rounded-lg"
	/>
</figure>
