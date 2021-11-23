<script>
	import { fade } from 'svelte/transition';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from '$lib/subComponents/LayoutContainLg.svelte';
	import Icon from '$lib/subComponents/Icon.svelte';
	import DownloadDocIcon from '$lib/icons/DownloadDocIcon.svelte';
	import { themeMode, colors } from '../stores';

	import bioImageSm from '../images/dl-bio-photo-128px.jpg';
	import bioImageMd from '../images/dl-bio-photo-256px.jpg';
	import bioImageLg from '../images/dl-bio-photo-384px.jpg';
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="about" class="anchor-tag" />
<div
	class="w-full bg-bldrsCovePaleStone dark:bg-bldrsCoveCoolSlate flex justify-center items-center pt-16 pb-16 sm:pt-32 sm:pb-32"
>
	<LayoutWrapper>
		<LayoutContainLg>
			<div>
				<div class="intro-text sm:flex">
					<div class="bio-photo-container">
						<img
							src={bioImageLg}
							srcset={`
									${bioImageSm} 640w, 
									${bioImageMd} 1024w, 
									${bioImageLg} 2000w,
								`}
							alt="Daniel lopez in black and white"
							class="w-20 h-24 sm:w-32 sm:h-36 rounded-lg bg-ashenLowContrast-light mb-4 sm:mb-0 sm:inline-block object-cover object-center"
							width="100%"
							height="100%"
							loading="lazy"
						/>
					</div>
					<div class="sm:inline-block ml-0 sm:ml-6">
						<h2 class="text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray">About me</h2>
						<h3 class="mt-2 text-bldrsCoveMidBlue">From designer to developer. ⚒️</h3>
						<p
							class="mt-5 sm:mt-3 sm-subhead text-base leading-6 text-ashenHighContrast-light dark:text-ashenMidContrast-dark"
						>
							BldrsCove is my place on the web where I can share projects and writing (coming soon).
						</p>
					</div>
				</div>
				<div
					class="mt-8 sm:grid sm:grid-cols-16 sm:gap-6 text-ashenHighContrast-light dark:text-ashenMidContrast-dark"
				>
					<div class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-1 sm:row-span-3">
						<p class="sm-title mb-2 mt-5 sm:mt-0">Specialization</p>
						<p>
							Most recently I’ve channeled my web design and graphic design experience into web
							programming as a front-end developer. Leveraging the latest technologies, I'm able to
							combine my visual skills with best practices to develop user-friendly and functional
							interfaces.
						</p>
					</div>
					<div class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-4 sm:row-span-3">
						<p class="sm-title mb-2 mt-5 sm:mt-0">Experience</p>
						<p>
							I’ve had the privilege of working at design agencies, a well established tech company,
							and also smaller businesses that focus in niche markets. Most of my freelancing
							consists of website and branding services, and have allowed me to connect with
							different clients throughout the states. My certification through the UCF Coding
							Bootcamp has also given me solid MERN stack foundational skills, which I've continued
							to develop.
						</p>
					</div>
					<div class="p-spacing sm:col-start-9 sm:col-span-8 sm:row-start-1 row-span-5">
						<p class="sm-title mb-2 mt-5 sm:mt-0">Technologies</p>
						<p>
							Some of the technologies I’m most excited about right now are Svelte JS, Gatsby, and
							Tailwind CSS. I’m currently continuing to expand my knowledge with Next JS.
						</p>
						<p class="mt-4 text-xs font-bold">Technologies I feel comfortable using:</p>
						<table class="table-auto technologies-table w-full">
							<tbody>
								<tr>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Javascript
										</p></td
									>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Gatsby
										</p></td
									>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Express
										</p></td
									>
								</tr>
								<tr>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											React
										</p></td
									>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Mongo DB
										</p></td
									>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Node JS
										</p></td
									>
								</tr>
							</tbody>
						</table>
						<p class="mt-4 text-xs font-bold">Technologies I'm currently learning:</p>
						<table class="table-auto technologies-table w-full">
							<tbody>
								<tr>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Next Js
										</p></td
									>
									<td
										><p class="text-xs ml-2 text-bldrsCovePureBlue dark:text-bldrsCoveBrightBlue">
											Svelte Js
										</p></td
									>
								</tr>
							</tbody>
						</table>
						<span class="block mt-12">
							<a href="/#" rel="noopener noreferrer">
								<Icon
									strokeColor={$themeMode === 'dark' ? $colors.brightBlue : $colors.pureBlue}
									fillColor="transparent"
									width="32"
									height="32"
									name="download-icon"
									svgClass="inline-block"
								>
									<DownloadDocIcon />
								</Icon>
								<h6
									class="inline-block ml-2 text-bldrsCoveDeepBlue dark:text-ashenMidContrast-dark dark:hover:text-bldrsCoveBrightBlue slide-left-right"
								>
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

<style type="text/postcss">
	.technologies-table {
		@apply content-center items-center border-separate rounded-md overflow-hidden mt-2;
	}
	.technologies-table td {
		@apply p-1 bg-[#d0dbed] dark:bg-[#242c44];
	}
	.technologies-table tr:first-child td:first-child {
		@apply rounded-tl-lg;
	}
	.technologies-table tr:first-child td:last-child {
		@apply rounded-tr-lg;
	}
	.technologies-table tr:last-child td:first-child {
		@apply rounded-bl-lg;
	}
	.technologies-table tr:last-child td:last-child {
		@apply rounded-br-lg;
	}
</style>
