<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import HomeTopSection from '../components/HomeTopSection.svelte';
	import About from '../components/About.svelte';
	import ProjectsWebDev from '../components/ProjectsWebDev.svelte';
	import ProjectsOtherWork from '../components/ProjectsOtherWork.svelte';
	import Contact from '../components/Contact.svelte';
	import { themeMode } from '../stores';

	onMount(() => {
		setTimeout(() => {
			document.documentElement.style.scrollBehavior = 'smooth';
		}, 100);

		if (window.localStorage.theme) {
			// decide according to whats been set in local storage
			const theme = window.localStorage.theme === 'dark' ? 'dark' : 'light';
			themeMode.update((val) => (val = theme));
		} else {
			// decide according to user theme preference or theme class
			const theme =
				window.matchMedia('(prefers-color-scheme: dark)').matches ||
				document.documentElement.className === 'dark'
					? 'dark'
					: 'light';
			themeMode.update((val) => (val = theme));
		}
	});
</script>

<svelte:head>
	<title>BldrsCove Portfolio</title>
</svelte:head>

<div in:fly={{ y: -100, duration: 500 }} out:fly={{ y: -100, duration: 500 }} class="bg-white">
	<section><HomeTopSection /></section>
	<section><ProjectsWebDev /></section>
	<section><About /></section>
	<section><ProjectsOtherWork /></section>
	<section><Contact /></section>
</div>
