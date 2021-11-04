<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-wrap flex-shrink-0 h-screen">
	<div class="w-full flex flex-col">
		<header class="w-full self-start fixed top-0 z-50">
			<Nav aria-label="primary-navigation" />
		</header>
		<body>
			<slot />
		</body>
	</div>
	<footer class="w-full self-end">
		<Footer />
	</footer>
</div>
