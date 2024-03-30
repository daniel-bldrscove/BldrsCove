<script lang="ts">
	import { themeMode, colors, isMobileMenuOpen } from '../../../stores';
	import MenuIcon from '$lib/assets/icons/MenuIcon.svelte';
	import Icon from '../shared/Icon.svelte';
</script>

<button
	id="menu-button"
	class="menu-icon sm:hidden rounded-md"
	type="button"
	aria-haspopup="true"
	aria-controls="menu"
	on:click|preventDefault="{() => {
		isMobileMenuOpen.update((val) => (val = !val));
	}}"
>
	<Icon
		strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
		fillColor="transparent"
		width="{32}"
		height="{32}"
		viewBox="0 0 256 256"
		name="mobile-menu-icon"
		svgClass=""
	>
		<MenuIcon />
	</Icon>
</button>
