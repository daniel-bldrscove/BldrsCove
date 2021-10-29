<script lang="ts">
	export let type: string;
	export let variant: string;
</script>

<button {type} class:primary={variant === 'primary'}><slot /></button>

<style>
	.primary {
		@apply bg-white h-14 w-full shadow-xl rounded-2xl;
	}
</style>
