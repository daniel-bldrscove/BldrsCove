<script lang="ts">
	export let width: string | number = 14;
	export let height: string | number = 14;
	export let name = '';
	export let fillColor = '';
	export let strokeColor = 'currentColor';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 38 38"
	aria-labelledby={name}
	role="presentation"
>
	<title id={name} lang="en">{`${name} icon`}</title>
	<g fill={fillColor} stroke={strokeColor}>
		<slot />
	</g>
</svg>

<style>
	svg {
		display: inline-block;
		vertical-align: middle;
	}
</style>
