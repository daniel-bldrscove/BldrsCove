<script lang="ts">
	const characterLimit = 220;
	export let messageLength: number;
	$: remainingCharacters = characterLimit - messageLength;
</script>

<p
	class="{`sm-title ${
		remainingCharacters < 220
			? `text-edlMidBlue dark:text-edlBrightBlue`
			: `text-ashenLowContrast-light dark:text-ashenLowContrast-dark`
	}`}">
	{#if remainingCharacters <= -1}
		<p class="sm-title text-edlOrange tracking-wider">Limit Reached!</p>
	{:else}
		{`${remainingCharacters} / ${characterLimit} left`}
	{/if}
</p>
