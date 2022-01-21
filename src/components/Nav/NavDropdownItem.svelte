<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import CarrotIcon from '$lib/icons/CarrotIcon.svelte';
	import CarrotDownIcon from '$lib/icons/CarrotDownIcon.svelte';
	import { themeMode } from '../../stores';
	export let animateDelay: number = 0;
</script>

<li
	in:fly="{{
		delay: animateDelay,
		duration: 350,
		x: -10,
		easing: expoInOut,
	}}"
	class="relative group block h-auto ml-4 md:ml-6 lg:ml-10"
>
	<div class="hidden absolute top-4 mt-2 ml-8 group-hover:block group-hover:h-full">
		<slot name="Dropdown" />
	</div>
	<h6>
		<span class="flex justify-content items-center">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<slot name="navItem" />
			<div class="mt-1">
				<CarrotIcon
					strokeColor="{$themeMode === 'dark' ? '#cccccc' : '#333742'}"
					fillColor="transparent"
					width="14"
					height="14"
					name="carrot-down-icon"
					svgClass="transform -rotate-90 group-hover:transition group-hover:duration-350 group-hover:ease-in-out group-hover:rotate-0"
				>
					<CarrotDownIcon />
				</CarrotIcon>
			</div>
		</span>
	</h6>
</li>
