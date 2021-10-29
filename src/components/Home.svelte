<script>
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import abstractImage from '../images/abstract-top-hero-image.png';
	import arrowIcon from '../images/icons/arrow-icon.svg';
	import computerIcon from '../images/icons/computer-icon.svg';
</script>

<div class="dark:bg-bldrsCoveCoolGray pt-60 pb-60">
	<LayoutWrapper>
		<div class="grid grid-cols-12 grid-rows-3 mt-15 mb-15">
			<div class="text-container col-start-1 col-end-10 row-start-1 row-span-2 grid content-center">
				<div class="text-content">
					<h1 class="mb-6 dark:text-bldrsCoveLtGray">Hello, I'm Daniel.</h1>
					<h2 class="dark:text-bldrsCoveLtGray">
						I build interactive experiences on the web through UI and modern javascript
						technologies.
					</h2>
				</div>
			</div>
			<div class="hero-image col-end-13 col-span-6 row-start-1 row-span-2 object-cover -z-10">
				<img src={abstractImage} alt="Developer coding away" class="opacity-30" />
			</div>
			<div class="w-full col-span-5 row-start-3 row-span-1 grid content-end">
				<div class="flex">
					<span class="cta-link">
						<img src={arrowIcon} alt="Arrow icon" class="inline-block" />
						<h6 class="inline-block dark:text-bldrsCoveLtGray">About me</h6>
					</span>
					<span class="cta-link ml-12">
						<img src={computerIcon} alt="Computer icon" class="inline-block" />
						<h6 class="inline-block dark:text-bldrsCoveLtGray">Recent work</h6>
					</span>
				</div>
			</div>
		</div>
	</LayoutWrapper>
</div>
