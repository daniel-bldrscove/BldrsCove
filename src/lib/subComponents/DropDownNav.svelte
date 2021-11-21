<div
	class="w-52 shadow-2xl pt-6 pb-6 bg-white dark:text-bldrsCoveLtGray dark:bg-bldrsCoveCoolGray rounded-xl"
>
	<div class="group">
		<a
			href="/#web-dev"
			rel="external"
			sveltekit:prefetch
			sveltekit:noscroll
			class="w-full text-left"
		>
			<div
				class="dropdown-nav-item dark:text-ashenMidContrast-dark dark:hover:text-white dark:hover:bg-bldrsCoveMidBlue"
			>
				<p>Web Development</p>
			</div>
		</a>
	</div>
	<div class="group">
		<a
			href="/#web-design"
			rel="external"
			sveltekit:prefetch
			sveltekit:noscroll
			class="w-full text-left"
		>
			<div
				class=" dropdown-nav-item dark:text-ashenMidContrast-dark dark:hover:text-white dark:hover:bg-bldrsCoveMidBlue"
			>
				<p>Web Design</p>
			</div>
		</a>
	</div>
</div>

<style>
	.dropdown-nav-item {
		@apply p-4 text-ashenMidContrast-light  hover:text-ashenHighContrast-light hover:bg-bldrsCoveLtBabyBlue;
	}
</style>
