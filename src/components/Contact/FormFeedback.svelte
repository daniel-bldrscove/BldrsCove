<script lang="ts">
	import Icon from '../shared/Icon.svelte';
	import HandWavingIcon from '$lib/icons/HandWavingIcon.svelte';
	import AlertIcon from '$lib/icons/AlertIcon.svelte';
	import { themeMode, colors } from '../../stores';

	export let submitted: boolean;
	export let submissionSuccess: boolean;
	export let error: string;
</script>

<div class="form-feedback relative">
	{#if submitted && submissionSuccess}
		<div class="submission-feedback w-full absolute mt-3 sm:mt-6 sm:mb-6 mx-auto">
			<span class="inline-block text-ashenMidContrast-light dark:text-ashenMidContrast-dark">
				<Icon
					strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
					fillColor="transparent"
					width="32"
					height="32"
					viewBox="0 0 256 256"
					name="hand-wave-icon"
					svgClass="hidden sm:inline-block mr-2"
				>
					<HandWavingIcon />
				</Icon>
				<p
					class="{`${
						$themeMode === 'dark' ? 'text-edlBrightBlue' : 'text-edlMidBlue'
					} inline-block text-sm sm:text-lg`}"
				>
					Thanks for your submission. Your message has been sent!
				</p>
			</span>
		</div>
	{:else if submitted && !submissionSuccess && error}
		<div class="submission-feedback w-full absolute mt-3 sm:mt-6 sm:mb-6 mx-auto">
			<span class="inline-block text-ashenMidContrast-light dark:text-ashenMidContrast-dark">
				<Icon
					strokeColor="{$colors.redWarning}"
					fillColor="transparent"
					width="32"
					height="32"
					viewBox="0 0 256 256"
					name="hand-wave-icon"
					svgClass="hidden sm:inline-block mr-2"
				>
					<AlertIcon />
				</Icon>
				<p class="{`text-[#d73855] inline-block text-sm sm:text-lg`}">
					{`An error occured. ${error}`}
				</p>
			</span>
		</div>
	{/if}
</div>
