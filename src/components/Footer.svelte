<script lang="ts">
	import { themeMode } from '../stores';
	import footerLogoLightMode from '../images/bldrscove-secondary-logo-light-mode-md.png';
	import footerLogoDarkMode from '../images/bldrscove-secondary-logo-dark-mode-md.png';
</script>

<div
	class="w-full grid grid-cols-1 justify-center content-center h-32 pt-2 bg-[#b9cdd7] dark:bg-bldrsCoveDeepBlue"
>
	<div class="self-center justify-self-center">
		<img
			src={$themeMode === 'dark' ? footerLogoDarkMode : footerLogoLightMode}
			alt="BldrsCove secondary logo"
			class="w-20"
		/>
	</div>
	<small
		class="text-center mt-2 self-center justify-self-center text-ashenMidContrast-light dark:text-ashenLowContrast-dark"
	>
		{`Designed & built by Daniel Lopez`}
	</small>
</div>

<style>
</style>
