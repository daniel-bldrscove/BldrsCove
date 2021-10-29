<script>
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import abstractImage from '../images/abstract-top-hero-image.png';
	import downloadDocIcon from '../images/icons/download-doc-icon.svg';
</script>

<div class="w-full bg-gray-200 dark:bg-bldrsCoveDeepBlue">
	<LayoutWrapper>
		<div class="grid grid-cols-12 grid-rows-4 pt-15 pb-15">
			<div class="about-image col-start-2 col-span-4 row-start-2 row-span-2">
				<img src={abstractImage} alt="Developer coding away" class="opacity-30" />
			</div>
			<div
				class="about-content-wrapper col-end-12 col-span-5 row-start-2 row-span-2 dark:text-bldrsCoveLtGray"
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
			<div class="col-start-7 col-span-3 row-start-4 row-span-1 grid content-start">
				<span class="mt-8">
					<img src={downloadDocIcon} alt="Computer icon" class="inline-block" />
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
