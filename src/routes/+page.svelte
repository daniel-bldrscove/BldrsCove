<script lang="ts">
	import { onMount } from 'svelte';
	import HomeTopSection from '$lib/components/HomeTopHero/index.svelte';
	import About from '$lib/components/About.svelte';
	import WebDevelopment from '$lib/components/WebDevelopment/index.svelte';
	import WebDesign from '$lib/components/WebDesign/index.svelte';
	import Contact from '$lib/components/Contact/index.svelte';
	import { themeMode } from '../stores';

	// update the themeMode global store value
	onMount(() => {
		if (window.localStorage.theme) {
			// first check user's system preference
			const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			themeMode.set(theme);
		} else {
			const theme = window.localStorage.theme === 'dark' ? 'dark' : 'light';
			themeMode.set(theme);
		}
	});
</script>

<svelte:head>
	<title>EDL Portfolio</title>
</svelte:head>

<div>
	<section><HomeTopSection /></section>
	<section><WebDevelopment /></section>
	<section><WebDesign /></section>
	<section><About /></section>
	<section><Contact /></section>
</div>
