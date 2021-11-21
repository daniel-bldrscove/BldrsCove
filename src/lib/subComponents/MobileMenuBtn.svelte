<script lang="ts">
	import Icon from '$lib/subComponents/Icon.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import { themeMode, colors, isMobileMenuOpen } from '../../stores';

	// export let handleMobileMenu: any;
</script>

<button
	class="menu-icon sm:hidden absolute left-0 rounded-md"
	type="button"
	on:click|preventDefault={() => {
		isMobileMenuOpen.update((val) => (val = !val));
	}}
>
	<Icon
		strokeColor={$themeMode === 'dark' ? $colors.brightBlue : $colors.pureBlue}
		fillColor="transparent"
		width="32"
		height="32"
		viewBox="0 0 256 256"
		name="mobile-menu-icon"
		svgClass=""
	>
		<MenuIcon />
	</Icon>
</button>

<style></style>
