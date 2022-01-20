<style lang="postcss">
	.dropdown-item-light {
		@apply p-4 text-ashenMidContrast-light hover:text-ashenHighContrast-light hover:bg-edlLtBabyBlue;
	}
</style>

<script lang="ts">
	export let itemHrefs: Record<string, string> = {
		hrefA: '',
		hrefB: '',
	};

	export const hrefItemA = itemHrefs.hrefA;
	export const hrefItemB = itemHrefs.hrefB;

	// post CSS can't handle the different light and dark variants
	// that's why it's being split up like this
	export const dropdownItemDark = 'dark:hover:bg-edlBrightBlue';
</script>

<div class="w-52 shadow-2xl pt-6 pb-6 bg-white dark:text-edlLtGray dark:bg-edlCoolGray rounded-xl">
	<div class="group">
		<a href="{hrefItemA}" rel="external" sveltekit:prefetch class="w-full text-left">
			<div class="{`dropdown-item-light ${dropdownItemDark}`}">
				<slot name="dropdown-item-A" />
			</div>
		</a>
	</div>
	<div class="group">
		<a href="{hrefItemB}" rel="external" sveltekit:prefetch class="w-full text-left">
			<div class="{`dropdown-item-light ${dropdownItemDark}`}">
				<slot name="dropdown-item-B" />
			</div>
		</a>
	</div>
</div>
