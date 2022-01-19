<script lang="ts">
export let mark: { href?: string } = {};
import type { MarkProps } from '@portabletext/svelte';

// Property custom marks receive from @portabletext/svelte when rendered
export let portableText: MarkProps<{
	href?: string;
}>;

// console.log('Mark PT: ', portableText);

$: mark = portableText.mark;
</script>

{#if mark.href}
	<a href="{mark.href}" target="_blank" rel="noopener noreferer" class="underline text-edlTealLight"
		><slot /></a>
{:else}
	<slot />
{/if}
