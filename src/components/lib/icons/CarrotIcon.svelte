<script lang="ts">
	export let width: string | number = 14;
	export let height: string | number = 14;
	export let name: string = '';
	export let fillColor: string = '';
	export let strokeColor: string = 'currentColor';
	export let svgClass: string = '';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 22 22"
	aria-labelledby={name}
	role="presentation"
	class={svgClass}
>
	<title id={name} lang="en">{`${name} icon`}</title>
	<g fill={fillColor} stroke={strokeColor}>
		<slot />
	</g>
</svg>

<style>
	g {
		position: relative;
	}
</style>
