<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;
	// console.log('Style PT: ', portableText);

	$: style = portableText.block.style;
</script>

{#if style === 'caption'}
	<p class="caption"><slot /></p>
{:else if style === 'breakBefore'}
	<!-- <p class="line-break"><slot /></p> -->
	<br /><slot />
{:else}
	<slot />
{/if}

<style>
	/* .line-break:before {
		white-space: pre-wrap;
		content: '\A';
	} */
	br {
		display: block;
		margin: 12px 0;
		content: '';
	}
</style>
