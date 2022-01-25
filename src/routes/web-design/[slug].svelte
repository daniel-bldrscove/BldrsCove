<script context="module" lang="ts">
	export async function load({ params }) {
		const pageSlug = params.slug;
		return {
			props: {
				pageSlug,
			},
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import client from '../../sanityClient';
	import PortableText from '@portabletext/svelte';
	import LayoutWrapper from '../../components/shared/LayoutWrapper.svelte';
	import MarkProps from '$lib/portableText/MarkProps.svelte';
	import ImageSerializer from '$lib/portableText/ImageSerializer.svelte';
	import StyleProps from '$lib/portableText/StyleProps.svelte';
	import imageUrlBuilder from '@sanity/image-url';

	let coverImage: {
		_ref: string;
		_type: string;
	} = null;
	let altText: string = '';
	let title: string = '';
	let description: [] = [];
	let projectLink: string = '';
	let disclaimer: string = '';
	let projectImages: [] = [];

	export let pageSlug: string;
	const shortSlug = pageSlug.replace('-website-design', '');

	const builder = imageUrlBuilder(client);

	function urlFor(source: { _ref: string; _type: string }) {
		return builder.image(source);
	}

	onMount(async () => {
		const query = `*[_type == 'web-design-project' && slug.current == '${pageSlug}']{
			coverImage{
				alt,
				asset
			},
			title,
			description,
			projectLink,
			disclaimer,
			projectImages,
		}`;
		await client
			.fetch(query)
			.then((data) => {
				if (data.length > 0) {
					// console.log('Incoming data: ', data);
					const project = data[0];
					coverImage = project.coverImage.asset;
					altText = project.coverImage.alt;
					title = project.title;
					description = project.description;
					projectLink = project.projectLink;
					projectImages = project.projectImages;
					if (project.disclaimer) {
						disclaimer = project.disclaimer;
					}
				}
			})
			.catch((error) => {
				console.log('Encountered error when fetching content: ', error);
				throw new Error(error);
			});
	});
</script>

<div
	class="bg-white dark:bg-edlCoolSlate h-full"
	in:fade="{{ duration: 100 }}"
	out:fade="{{ duration: 100 }}"
>
	{#if coverImage}
		<img
			src="{urlFor(coverImage).format('webp').url()}"
			srcset="{`
					${urlFor(coverImage).format('webp').width(640).url()} 640w, 
					${urlFor(coverImage).format('webp').width(768).url()} 768w, 
					${urlFor(coverImage).format('webp').width(1024).url()} 1024w, 
					${urlFor(coverImage).format('webp').width(1280).url()} 1280w, 
					${urlFor(coverImage).format('webp').width(1536).url()} 1536w, 
					${urlFor(coverImage).format('webp').width(2000).url()} 2000w, 
				`}"
			width="100%"
			height="100%"
			alt="{altText}"
			class="w-full h-96 md:h-106 2xl:w-10/12 2xl:mx-auto 2xl:rounded-lg object-cover object-center"
		/>
	{/if}
	<LayoutWrapper>
		<div class="pt-8 pb-8">
			<div class="mt-8 mb-8">
				<h1
					class="mb-4 text-3xl lg:w-10/12 xl:w-8/12 lg:mx-auto text-edlCoolGray dark:text-edlLtGray"
				>
					{title && title}
				</h1>
				<!--Description-->
				<div
					class="mb-16 lg:w-10/12 xl:w-8/12 lg:mx-auto text-ashenMidContrast-light dark:text-ashenMidContrast-dark"
				>
					<PortableText
						blocks="{description}"
						serializers="{{
							types: {
								image: ImageSerializer,
							},
							marks: {
								link: MarkProps,
							},
							blockStyles: {
								caption: StyleProps,
								breakBefore: StyleProps,
							},
						}}"
					/>
				</div>
			</div>
			<!--Images-->
			<PortableText
				blocks="{projectImages}"
				serializers="{{
					types: {
						image: ImageSerializer,
					},
				}}"
			/>
			<!--Project Link-->
			<span class="block mt-8 text-ashenMidContrast-light dark:text-ashenMidContrast-dark">
				<!--Disclaimer-->
				<p class="text-xs leading-4">{disclaimer ? disclaimer : ''}</p>
				<p class="text-xs leading-4">
					(Website appearance may have changed since the completion of this project)
				</p>
				<p>
					<a
						class="text-xs font-bold slide-left-right text-ashenMidContrast-light dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue"
						href="{projectLink && `${projectLink}`}"
						target="_blank"
						rel="noopener noreferrer">{`www.${shortSlug}.com`}</a
					>
				</p>
			</span>
		</div>
	</LayoutWrapper>
</div>
