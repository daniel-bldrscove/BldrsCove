<script>
	import { navigate } from '../../stores';
</script>

<div
	class="w-52 shadow-2xl pt-6 pb-6 bg-white dark:text-bldrsCoveLtGray dark:bg-bldrsCoveCoolGray rounded-xl"
>
	<div class="group">
		<button on:click={() => navigate(`/#web-dev`)} class="w-full text-left">
			<div
				class="dropdown-nav-item dark:text-ashenMidContrast-dark dark:hover:text-white dark:hover:bg-bldrsCoveMidBlue"
			>
				<p>Web Development</p>
			</div>
		</button>
	</div>
	<div class="group">
		<button on:click={() => navigate(`/#web-design`)} class="w-full text-left">
			<div
				class=" dropdown-nav-item dark:text-ashenMidContrast-dark dark:hover:text-white dark:hover:bg-bldrsCoveMidBlue"
			>
				<p>Web Design</p>
			</div>
		</button>
	</div>
</div>

<style>
	.dropdown-nav-item {
		@apply p-4 text-ashenMidContrast-light  hover:text-ashenHighContrast-light hover:bg-bldrsCoveLtBabyBlue;
	}
</style>
