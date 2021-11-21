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
						<h3 class="mt-2 text-bldrsCoveMidBlue">I’m a builder ⚒️ and tinkerer.</h3>
						<p class="mt-5 sm:mt-3 sm-subhead text-base leading-6">
							BldrsCove is my little place on the web where I can share projects and writing (coming
							soon).
						</p>
					</div>
				</div>
				<div
					class="p-spacing sm:mt-0 sm:grid sm:grid-cols-16 sm:gap-6 text-ashenHighContrast-light dark:text-ashenMidContrast-dark"
				>
					<p class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-3 sm:row-span-3">
						Most recently I’ve channeled my web design and graphic design experience into web
						programming as a front-end developer. Leveraging the latest technologies, I'm able to
						combine my visual skills with best practices to develop user-friendly and functional
						interfaces.
					</p>
					<p class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-6 sm:row-span-3">
						I’ve had the privilege of working at design agencies, a well established tech company,
						and also smaller businesses that focus in niche markets. Most of my freelancing consists
						of website and branding services, and have allowed me to connect with different clients
						throughout the states.
					</p>
					<p class="p-spacing sm:col-start-9 sm:col-span-8 sm:row-start-3 sm:row-span-3">
						Some of the technologies I’m most excited about right now are Svelte JS, React, and
						Tailwind CSS. I’m currently continuing to expand my knowledge with Next JS (building on
						top of React).
					</p>
					<span class="block mt-8 sm:col-start-9 sm:col-span-8 sm:row-start-6 sm:row-span-3">
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
								class="inline-block ml-2 text-bldrsCoveDeepBlue dark:text-ashenMidContrast-dark slide-left-right"
							>
								Download resumé
							</h6>
						</a>
					</span>
				</div>
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>

<style>
	.p-spacing {
		@apply mt-8 sm:mt-0;
	}
</style>
