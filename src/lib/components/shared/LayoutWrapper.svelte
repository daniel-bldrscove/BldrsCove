<script>
	export let wrapperClass = '';
</script>

<div class="{`layout-wrapper w-11/12 md:w-10/12 mx-auto ${wrapperClass}`}">
	<slot />
</div>
