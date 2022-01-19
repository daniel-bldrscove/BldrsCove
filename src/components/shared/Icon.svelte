<script deferr lang="ts">
	export let width: string | number = 14;
	export let height: string | number = 14;
	export let name: string = '';
	export let fillColor: string = '';
	export let strokeColor: string = 'currentColor';
	export let svgClass: string = '';
	export let viewBox: string = '0 0 38 38';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	{viewBox}
	aria-labelledby={name}
	role="presentation"
	class={svgClass}
>
	<title class={name} lang="en">{`${name}`}</title>
	<g fill={fillColor} stroke={strokeColor}>
		<slot />
	</g>
</svg>

<style>
	g {
		position: relative;
	}
</style>
