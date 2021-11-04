<script lang="ts">
	export let mark: { href?: string } = {};
	import type { MarkProps } from '@portabletext/svelte';

	// Property custom marks receive from @portabletext/svelte when rendered
	export let portableText: MarkProps<{
		href?: string;
	}>;

	$: mark = portableText.mark;
	$: href = mark?.href || false;

	$: console.log('href: ', href); // false
	$: console.log('mark: ', mark); // undefined
</script>

{#if mark}
	<a href={mark.href} target="_blank"><slot /></a>
{:else}
	<slot />
{/if}
