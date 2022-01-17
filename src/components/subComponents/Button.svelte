<script lang="ts">
	export let type: string;
	export let disabled: boolean;
	export let variant: string;
	export let className: string;
</script>

<button class={`${variant === 'primary' ? 'primary' : 'secondary'} ${className}`} {type} {disabled}
	><slot /></button
>

<style>
	.primary {
		@apply bg-white h-14 w-full shadow-xl rounded-2xl;
	}
</style>
