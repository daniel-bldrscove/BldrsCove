<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import HomeTopSection from '../components/HomeTopHero/index.svelte';
	import About from '../components/About.svelte';
	import FeaturedWork from '../components/FeaturedWork/index.svelte';
	import OtherWork from '../components/OtherWork/index.svelte';
	import Contact from '../components/Contact/index.svelte';
	import { themeMode } from '../stores';

	// update the themeMode global store value
	onMount(() => {
		if (window.localStorage.theme) {
			const theme = window.localStorage.theme === 'dark' ? 'dark' : 'light';
			themeMode.update((val) => (val = theme));
		} else {
			// update based on user theme preference
			const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			themeMode.update((val) => (val = theme));
		}
	});
</script>

<svelte:head>
	<title>EDL Portfolio</title>
</svelte:head>

<div>
	<section><HomeTopSection /></section>
	<section><FeaturedWork /></section>
	<section><OtherWork /></section>
	<section><About /></section>
	<section><Contact /></section>
</div>
