<script>
	import { onMount } from 'svelte';
	import { themeMode, colors } from '../stores';
	import { fly } from 'svelte/transition';
	import viewport from '../utilities/useViewportAction';
	import transitionConfig from '../utilities/transitions';

	import LayoutWrapper from './shared/LayoutWrapper.svelte';
	import LayoutContainLg from './shared/LayoutContainLg.svelte';
	import Icon from './shared/Icon.svelte';
	import DownloadDocIcon from '$lib/icons/DownloadDocIcon.svelte';
	import TableCallout from './shared/TableCallout/index.svelte';

	import bioImageSm from '../images/dl-bio-photo-128px.jpg';
	import bioImageMd from '../images/dl-bio-photo-256px.jpg';
	import bioImageLg from '../images/dl-bio-photo-384px.jpg';

	let bioSm;
	let bioMd;
	let bioLg;

	onMount(() => {
		bioSm = bioImageSm;
		bioMd = bioImageMd;
		bioLg = bioImageLg;
	});

	export const frameworksTblData = [
		{
			tech1: 'HTML & CSS',
			tech2: 'Javascript',
			tech3: 'React',
			tech4: 'Gatsby',
		},
		{
			tech1: 'Tailwindcss',
			tech2: 'Emotion',
			tech3: 'Styled Comp.',
			tech4: 'Sanity.io',
		},
		{
			tech2: 'Node Js',
			tech1: 'Vercel/Netlify',
		},
	];

	export const clTblData = [
		{
			tech1: 'Next Js',
			tech2: 'Svelte',
			tech3: 'Remix Run',
		},
	];

	let transitionHeadings = false;
	let transitionContent = false;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="about" class="anchor-tag"></a>
<div
	class="w-full dark:bg-edlCoolGray flex justify-center items-center pt-16 pb-16 sm:pt-32 sm:pb-32"
>
	<LayoutWrapper>
		<LayoutContainLg>
			<div
				class="animate-headings"
				use:viewport
				on:enterviewport="{() => (transitionHeadings = true)}"
			></div>
			<div>
				{#if transitionHeadings}
					<div class="intro-text sm:flex">
						<div in:fly="{transitionConfig(25, 350, 0, 10)}" class="bio-photo-container">
							{#if bioSm && bioMd && bioLg}
								<img
									src="{bioSm}"
									srcset="{`
									${bioSm} 640w, 
									${bioMd} 1024w, 
									${bioLg} 2000w,
								`}"
									alt="Daniel lopez in black and white"
									class="w-20 h-24 sm:w-32 sm:h-36 rounded-lg bg-ashenLowContrast-light mb-4 sm:mb-0 sm:inline-block object-cover object-center"
									width="100%"
									height="100%"
									loading="lazy"
								/>
							{/if}
						</div>
						<div class="sm:inline-block ml-0 sm:ml-6">
							<h2
								in:fly="{transitionConfig(75, 420, 0, 10)}"
								class="sm:pt-[1.6rem] text-edlDeepBlue dark:text-white"
							>
								About me ⚒️
							</h2>
							<h3 in:fly="{transitionConfig(100, 520, 0, 10)}" class="mt-2 text-edlOrange">
								From design to development
							</h3>
						</div>
					</div>
				{/if}
				<div
					class="animate-transition-content"
					use:viewport
					on:enterviewport="{() => (transitionContent = true)}"
				></div>
				{#if transitionContent}
					<div
						class="mt-8 sm:grid sm:grid-cols-16 sm:gap-6 text-ashenHighContrast-light dark:text-ashenMidContrast-dark"
					>
						<div
							in:fly="{transitionConfig(75, 520, 0, 10)}"
							class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-1 sm:row-span-2"
						>
							<h4 class="mb-2 mt-5 sm:mt-0 text-edlDeepBlue dark:text-ashenHighContrast-dark">
								Specialization
							</h4>
							<p>
								Most recently I&apos;ve channeled my web design and graphic design experience into
								web programming as a front-end developer. Leveraging the latest technologies, I'm
								able to combine my visual skills with best practices to develop user-friendly and
								functional interfaces.
							</p>
						</div>
						<div
							in:fly="{transitionConfig(120, 565, 0, 10)}"
							class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-4 sm:row-span-2"
						>
							<h4 class="mb-2 mt-5 sm:mt-0 text-edlDeepBlue dark:text-ashenHighContrast-dark">
								Experience
							</h4>
							<p>
								I&apos;ve had the privilege of working at design agencies, a well established tech
								company, and also smaller businesses that focus in niche markets. Most of my
								freelance consists of web app (or website), UI/UX, and branding services allowing me
								to connect with different clients throughout the states. My certification through
								the UCF Coding Bootcamp has given me a solid MERN stack foundation, and I continue
								develop my knowledge through online workshops, community resources and tech events.
							</p>
						</div>
						<div
							in:fly="{transitionConfig(145, 610, 0, 10)}"
							class="p-spacing sm:col-start-9 sm:col-span-8 sm:row-start-1 row-span-5"
						>
							<h4 class="mb-2 mt-5 sm:mt-0 text-edlDeepBlue dark:text-ashenHighContrast-dark">
								Technologies
							</h4>
							<p>
								Some of my favorite libraries and frameworks at the moment are React, Chakra UI,
								Tailwindcss, Gatsby, React Query and SvelteKit. Other frameworks I&apos;d like to
								pick up are Next Js and Remix Run.
							</p>
							<p
								class="font-niveauGrotesk font-medium text-sm mt-4 dark:text-ashenHighContrast-dark"
							>
								Frameworks, Libraries, and Languages:
							</p>
							<TableCallout
								tblClass="callout-table"
								tblTdClass="bg-[#f0f6ff] dark:bg-[#252832]"
								tableData="{frameworksTblData}"
								showCols="{false}"
							/>
							<p
								class="font-niveauGrotesk font-medium text-sm mt-4 dark:text-ashenHighContrast-dark"
							>
								Currently learning:
							</p>
							<TableCallout
								tblClass="callout-table"
								tblTdClass="bg-[#f0f6ff] dark:bg-[#252832]"
								tableData="{clTblData}"
								showCols="{false}"
							/>
							<span class="block mt-12">
								<a href="/edwindanlopez-resumé.pdf" target="_blank" rel="noopener noreferrer">
									<Icon
										strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
										fillColor="transparent"
										width="32"
										height="32"
										name="download-icon"
										svgClass="inline-block"
									>
										<DownloadDocIcon />
									</Icon>
									<h6
										class="inline-block ml-2 text-edlDeepBlue dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue slide-left-right"
									>
										Download resumé
									</h6>
								</a>
							</span>
						</div>
					</div>
				{/if}
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>
