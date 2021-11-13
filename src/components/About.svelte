<script>
	import { fade } from 'svelte/transition';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from '$lib/subComponents/LayoutContainLg.svelte';
	import Icon from '$lib/subComponents/Icon.svelte';
	import DownloadDocIcon from '$lib/icons/DownloadDocIcon.svelte';
	import { themeMode, colors } from '../stores';
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="about" class="anchor-tag" />
<div
	class="w-full bg-bldrsCovePaleStone dark:bg-bldrsCoveCoolSlate flex justify-center items-center pt-16 pb-16 sm:pt-32 sm:pb-32"
>
	<LayoutWrapper>
		<LayoutContainLg>
			<div>
				<div class="intro-text">
					<h2 class="mb-2 text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray">About me</h2>
					<h3 class="text-bldrsCoveMidBlue">I’m a builder and tinkerer at heart.</h3>
				</div>
				<div
					class="p-spacing sm:mt-0 sm:grid sm:grid-cols-16 sm:gap-6 text-ashenMidContrast-light dark:text-ashenMidContrast-dark"
				>
					<p class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-3 sm:row-span-3">
						Most recently I’ve channeled my web and graphic design experience into web programming
						as a front-end developer. I like to dig into how the latest web technologies work, in
						order to deliver a pleasing digital experience.
					</p>
					<p class="p-spacing sm:col-start-1 sm:col-span-7 sm:row-start-6 sm:row-span-3">
						I’ve had the privilege of working at design agencies, a well established tech company,
						and also smaller businesses that focus in niche markets. I’ve also done a fair share of
						freelancing allowing me to connect with different clients across the states.
					</p>
					<p class="p-spacing sm:col-start-9 sm:col-span-8 sm:row-start-3 sm:row-span-3">
						I’m a big fan of concepts like decoupling and headless technologies, which have become
						even more popular thanks to the Jamstack. My goal is to deliver exceptional interfaces
						that communicate functionality and clarity to the end user.
					</p>
					<span class="block mt-8 sm:col-start-9 sm:col-span-8 sm:row-start-6 sm:row-span-3">
						<a href="/#">
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
