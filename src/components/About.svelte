<script>
	import { fade } from 'svelte/transition';
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import abstractImage from '../images/abstract-top-hero-image.png';
	import Icon from '$lib/Icon.svelte';
	import DownloadDocIcon from '$lib/icons/DownloadDocIcon.svelte';
</script>

<div
	id="about"
	class="w-full bg-gray-200 dark:bg-bldrsCoveDeepBlue flex justify-center items-center pt-28 pb-28"
>
	<LayoutWrapper>
		<div class="grid grid-cols-12">
			<div class="about-image col-start-1 col-span-4 row-start-1 row-span-2">
				<img src={abstractImage} alt="Developer coding away" class="opacity-30" />
			</div>
			<div
				class="about-content-wrapper col-end-13 col-span-6 row-start-1 row-span-2 dark:text-bldrsCoveLtGray"
			>
				<h2>About me</h2>
				<p class="p-spacing">I’m a builder and tinkerer at heart.</p>
				<p class="p-spacing">
					Most recently I’ve channeled my web design and graphic design experience into web
					programming as a front-end developer. I like to dig into how the latest web technologies
					work, in order to deliver a pleasing digital experience.
				</p>
				<p class="p-spacing">
					I’ve had the privilege of working at design agencies, a well established tech company, and
					also smaller businesses that focus in niche markets. I’ve also done a fair share of
					freelancing allowing me to connect with different clients across the states.
				</p>
				<p>
					I’m a big fan of concepts like decoupling and headless technologies, which have become
					even more popular thanks to the Jamstack. My goal is to deliver exceptional interfaces
					that communicate functionality and clarity to the end user.
				</p>
			</div>
			<div class="col-end-13 col-span-6 row-start-3 row-span-1 grid content-start">
				<span class="mt-8">
					<Icon
						strokeColor="#656870"
						fillColor="transparent"
						width="32"
						height="32"
						name="download-icon"
						svgClass="inline-block"
					>
						<DownloadDocIcon />
					</Icon>
					<h6 class="inline-block ml-2 dark:text-bldrsCoveLtGray">Recent work</h6>
				</span>
			</div>
		</div>
	</LayoutWrapper>
</div>

<style>
	.p-spacing {
		@apply mb-5;
	}
</style>
