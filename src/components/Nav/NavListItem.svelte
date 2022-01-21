<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	export let href: string = '';
	export let rel: string = 'external';
	export let classes: string = 'ml-4 md:ml-6 lg:ml-10';
	export let animateDelay: number = 0;
</script>

<li
	in:fly="{{
		delay: animateDelay,
		duration: 350,
		x: -10,
		easing: expoInOut,
	}}"
	class="{classes}"
>
	<h6>
		<a href="{href}" rel="{rel}" class="nav-item slide-left-right">
			<slot />
		</a>
	</h6>
</li>
