<script>
	import Nav from '$lib/components/Nav/index.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-wrap flex-shrink-0 h-screen">
	<div class="w-full flex flex-col">
		<header class="w-full block self-start sticky top-0 z-50">
			<Nav />
		</header>
		<body>
			<slot />
		</body>
	</div>
	<footer class="w-full self-end">
		<Footer />
	</footer>
</div>
