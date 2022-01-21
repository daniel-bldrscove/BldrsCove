<script>
	import { slide } from 'svelte/transition';

	export let excerpt;
	export let description;

	export let showAccordion;

	const showCollapse = () => {
		showAccordion = !showAccordion;
	};
</script>

<div>
	<span class="mt-3 mb-8 block">
		<p id="dev-card-excerpt" class="inline text-[0.95rem] leading-[1.35rem] mr-2">
			{excerpt}
		</p>
		{#if showAccordion}
			<div transition:slide class="mt-6 mb-6">
				<p id="dev-card-content" class="text-[0.95rem] leading-[1.35rem]">
					{description}
				</p>
			</div>
		{/if}
		<button on:click="{showCollapse}"
			><p class="text-sm text-edlMidBlue dark:text-edlBrightBlue slide-left-right">
				{showAccordion ? 'Read less...' : 'Read more...'}
			</p></button
		>
	</span>
</div>
