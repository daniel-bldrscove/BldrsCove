<script lang="ts">
	const characterLimit = 220;
	export let messageLength: number;
	$: console.log(messageLength);
	$: remainingCharacters = characterLimit - messageLength;
</script>

<p class="sm-title text-ashenLowContrast-light dark:text-ashenLowContrast-dark">
	{#if remainingCharacters <= -1}
		<p class="sm-title text-bldrsCoveMidBlue tracking-wider">Limit Reached!</p>
	{:else}
		{`${remainingCharacters} / ${characterLimit} left`}
	{/if}
</p>
