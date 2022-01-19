<style lang="postcss">
	.about-table {
		@apply content-center items-center border-separate rounded-md overflow-hidden mt-2;
	}
	.about-table td {
		@apply p-1 bg-[#dbe3ef] dark:bg-[#1a2032];
	}
</style>

<script>
	import { onMount } from 'svelte';
	import LayoutWrapper from './shared/LayoutWrapper.svelte';
	import LayoutContainLg from './shared/LayoutContainLg.svelte';
	import Icon from './shared/Icon.svelte';
	import DownloadDocIcon from '$lib/icons/DownloadDocIcon.svelte';
	import { themeMode, colors } from '../stores';

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
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="about" class="anchor-tag"></a>
<div
	class="w-full bg-edlPaleStone dark:bg-edlCoolSlate flex justify-center items-center pt-16 pb-16 sm:pt-32 sm:pb-32">
	<LayoutWrapper>
		<LayoutContainLg>
			<div>
				<div class="intro-text sm:flex">
					<div class="bio-photo-container">
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
								loading="lazy" />
						{/if}
					</div>
					<div class="sm:inline-block ml-0 sm:ml-6">
						<h2 class="text-edlDeepBlue dark:text-edlLtGray">About me</h2>
						<h3 class="mt-2 text-edlOrange">From designer to developer. ⚒️</h3>
						<p
							class="mt-5 sm:mt-3 sm-subhead text-base leading-6 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
							BldrsCove is my place on the web where I share projects and writing. (coming soon).
						</p>
					</div>
				</div>
				<div
					class="mt-8 sm:grid sm:grid-cols-16 sm:gap-6 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
					<div class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-1 sm:row-span-2">
						<h4 class="mb-2 mt-5 sm:mt-0 text-edlDeepBlue dark:text-ashenHighContrast-dark">
							Specialization
						</h4>
						<p>
							Most recently I’ve channeled my web design and graphic design experience into web
							programming as a front-end developer. Leveraging the latest technologies, I'm able to
							combine my visual skills with best practices to develop user-friendly and functional
							interfaces.
						</p>
					</div>
					<div class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-4 sm:row-span-2">
						<h4 class="mb-2 mt-5 sm:mt-0 text-edlDeepBlue dark:text-ashenHighContrast-dark">
							Experience
						</h4>
						<p>
							I’ve had the privilege of working at design agencies, a well established tech company,
							and also smaller businesses that focus in niche markets. Most of my freelance consists
							of web app (or website), UI/UX, and branding services allowing me to connect with
							different clients throughout the states. My certification through the UCF Coding
							Bootcamp has given me a solid MERN stack foundation, and I continue develop my
							knowledge through online workshops, community resources and tech events.
						</p>
					</div>
					<div class="p-spacing sm:col-start-9 sm:col-span-8 sm:row-start-1 row-span-5">
						<h4 class="mb-2 mt-5 sm:mt-0 text-edlDeepBlue dark:text-ashenHighContrast-dark">
							Technologies
						</h4>
						<p>
							Some of the technologies I’m most excited about right now are Gatsby, React Query, and
							Tailwind CSS. I also do my best to keep up with emerging technologies. On my radar to
							learn are Next Js, SvelteKit, and the newly released Remix Run.
						</p>
						<p
							class="font-niveauGrotesk font-medium text-sm mt-4 -ml-1 slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue">
							Frameworks, Libraries, and Languages:
						</p>
						<table class="table-auto about-table w-full">
							<tbody>
								<tr>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											HTML & CSS
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Javascript
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											React
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Gatsby
										</p></td>
								</tr>
								<tr>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Tailwind
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Emotion
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Styled Components
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Sanity
										</p></td>
								</tr>
								<tr>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Node JS
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Vercel/Netlify
										</p></td>
								</tr>
							</tbody>
						</table>
						<p
							class="font-niveauGrotesk font-medium text-sm mt-4 -ml-1 slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue">
							Currently learning:
						</p>
						<table class="table-auto about-table w-full">
							<tbody>
								<tr>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Next Js
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Svelte Js
										</p></td>
									<td
										><p
											class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
											Remix Run
										</p></td>
								</tr>
							</tbody>
						</table>
						<span class="block mt-12">
							<a
								href="/daniel-lopez-bldrscove-resumé.pdf"
								target="_blank"
								rel="noopener noreferrer">
								<Icon
									strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
									fillColor="transparent"
									width="32"
									height="32"
									name="download-icon"
									svgClass="inline-block">
									<DownloadDocIcon />
								</Icon>
								<h6
									class="inline-block ml-2 text-edlDeepBlue dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue slide-left-right">
									Download resumé
								</h6>
							</a>
						</span>
					</div>
				</div>
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>
