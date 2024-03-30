<script lang="ts">
	export let showAccordion: boolean = false;

	const showCollapse = () => {
		showAccordion = !showAccordion;
	};
</script>

<div>
	<span class="mt-3 mb-8 block">
		<slot />
		<button on:click="{showCollapse}"
			><p class="text-sm text-edlMidBlue dark:text-edlBrightBlue slide-left-right">
				{showAccordion ? 'Read less...' : 'Read more...'}
			</p></button
		>
	</span>
</div>
