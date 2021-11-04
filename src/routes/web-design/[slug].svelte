<script context="module" lang="ts">
	export async function load({ page, fetch, session, stuff }) {
		const pageSlug = page.params.slug;
		return {
			props: {
				pageSlug
			}
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import client from '../../sanityClient';
	import PortableText from '@portabletext/svelte';
	import LayoutWrapper from '$lib/LayoutWrapper.svelte';
	import DescLinkBlock from '$lib/portableText/DescLinkBlock.svelte';

	export let pageSlug: string;

	let coverImage: string = '';
	let altText: string = '';
	let title: string = '';
	let projectLink: string = '';
	let description: [] = [];

	onMount(async () => {
		const query = `*[_type == 'web-design-project' && slug.current == '${pageSlug}']{
			coverImage{
				alt,
				asset->{
					assetId,
					url,
				},
			},
			description,
			projectLink,
			title,
			_id,
		}`;
		await client
			.fetch(query)
			.then((data) => {
				// console.log('Data: ', data);
				if (data.length > 0) {
					console.log('Incoming data: ', data);
					const project = data[0];

					coverImage = project.coverImage.asset.url;
					altText = project.coverImage.alt;
					title = project.title;
					projectLink = project.projectLink;
					description = project.description;
				}
			})
			.catch((error) => {
				console.log('Encountered error when fetching content: ', error);
				throw new Error(error);
			});
	});
</script>

<LayoutWrapper>
	<div>
		<img src={coverImage} alt={altText && altText} class="w-full object-cover object-center" />
		<h1>{title && title}</h1>
		<h5>{projectLink && `${projectLink}`}</h5>
		<!-- description is an array incoming from the sanity client fetch call -->
		<PortableText
			blocks={description}
			serializers={{
				types: {},
				marks: {
					link: DescLinkBlock
				},
				blockStyles: {}
			}}
		/>
	</div>
</LayoutWrapper>
