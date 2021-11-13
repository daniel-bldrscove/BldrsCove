<script>
	export let wrapperClass = '';
</script>

<div class={`w-full lg:w-11/12 xl:w-10/12 2xl:w-10/12 ultraWide:w-8/12 mx-auto ${wrapperClass}`}>
	<slot />
</div>
