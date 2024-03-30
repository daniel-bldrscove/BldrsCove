<script>
	import { fly } from 'svelte/transition';
	import transitionConfig from '$lib/utilities/transitions';
</script>

<div>
	<h2
		in:fly|global="{transitionConfig(25, 350, 0, 10)}"
		class="mb-5 sm:mb-16 text-edlDeepBlue dark:text-edlLtGray"
	>
		Drop me a line ✍🏼
	</h2>
	<h4
		in:fly|global="{transitionConfig(75, 420, 0, 10)}"
		class="w-8/12 sm:w-11/12 mx-auto mb-6 sm:mb-4 text-edlOrange dark:text-edlOrange"
	>
		Thanks for checking out my website
	</h4>
	<p
		class="max-w-[28rem] lg:max-w-none lg:w-[32rem] mx-auto text-ashenMidContrast-light dark:text-ashenMidContrast-dark"
	>
		If you have a question or would like to inquire about a project, send me an email. I do my best
		to respond within 24hrs.
	</p>
</div>
