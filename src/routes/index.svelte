<!-- <script context="module" lang="ts">
	export async function load({ fetch }) {
		const url = '/api/webDesignProjects';
		const res = await fetch(url, { method: 'GET' });

		if (res.ok) {
			return {
				props: {
					webDesignProjects: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: res.error
		};
	}
</script> -->
<script lang="ts">
	import HomeTopSection from '../components/HomeTopSection.svelte';
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import Contact from '../components/Contact.svelte';
</script>

<svelte:head>
	<title>BldrsCove Portfolio</title>
</svelte:head>

<div>
	<section><HomeTopSection /></section>
	<section><About /></section>
	<section><Projects /></section>
	<section><Contact /></section>
</div>
