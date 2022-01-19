<style>
	.primary {
		@apply bg-white h-14 w-full shadow-xl rounded-2xl;
	}
</style>

<script lang="ts">
	export let disabled: boolean | null = null;
	export let variant: string = '';
	export let className: string = '';
</script>

<button
	class="{`${variant === 'primary' ? 'primary' : 'secondary'} ${className}`}"
	disabled="{disabled}"><slot /></button>
