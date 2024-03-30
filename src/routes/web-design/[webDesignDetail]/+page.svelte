<script lang="ts">
	import { fade } from 'svelte/transition';
	import { PortableText } from '@portabletext/svelte';
	import LayoutWrapper from '$lib/components/shared/LayoutWrapper.svelte';
	import Image from '$lib/components/shared/Image.svelte';
	import BlockComponent from '$lib/components/shared/portableText/BlockComponent.svelte';

	export let data;
	const projectDetails = data.data!;
	$: ({ coverImage, title, description, projectLink, disclaimer, projectImages, shortSlug } =
		projectDetails);
	$: console.log('Incoming data to +page.svelte: ', data.data);
</script>

<div
	class="bg-white dark:bg-edlCoolSlate h-full"
	in:fade|global="{{ duration: 100 }}"
	out:fade|global="{{ duration: 100 }}"
>
	{#if coverImage}
		<Image
			optimizedImg="{coverImage.asset}"
			imgWidth="100%"
			imgHeight="100%"
			altText="{coverImage.altText}"
			loading="eager"
			customStyling="w-full h-96 md:h-106 2xl:w-10/12 2xl:mx-auto 2xl:rounded-lg object-cover object-center"
		/>
	{/if}
	<LayoutWrapper>
		<div class="metadata-container mt-8 mb-8">
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
					value="{description}"
					components="{{
						block: {
							normal: BlockComponent,
						},
					}}"
				/>
			</div>
		</div>
		<!--Images-->
		{#each projectImages as image}
			<Image
				optimizedImg="{image.asset}"
				imgWidth="100%"
				imgHeight="100%"
				altText="{image.altText}"
				loading="lazy"
				customStyling="rounded-lg mt-4 mb-4"
			/>
		{/each}
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
	</LayoutWrapper>
</div>
