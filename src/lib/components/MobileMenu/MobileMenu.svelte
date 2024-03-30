<style lang="postcss">
	.mobile-nav-buttons {
		@apply block h-16 w-full mt-3 mb-3 p-3 border border-edlBrightBlue rounded-md bg-white;
	}
</style>

<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { isMobileMenuOpen } from '../../../stores';
	import { fly } from 'svelte/transition';
	import transitionConfig from '$lib/utilities/transitions';
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';

	const handleNavigate = (project: string): void => {
		isMobileMenuOpen.update((val) => !val);
		if (project) {
			goto(project);
		}
	};

	$: shouldFlyIn = false;

	onMount(() => {
		shouldFlyIn = true;
		if (browser) {
			document.body.className = 'modal-open';
		}

		return () => document.body.removeAttribute('class');
	});

	// 	on:click="{() => {
	// 	isMobileMenuOpen.update((val) => !val);
	// }}"
</script>

{#if shouldFlyIn}
	<div class="overlay-wrapper">
		<nav class="absolute w-full h-screen -z-10" aria-labelledby="menu-button">
			<div id="mobile-menu" class="absolute sm:hidden w-full drop-shadow-2xl">
				<div
					in:fly|global="{transitionConfig(0, 75, 0, 0)}"
					out:fly|global="{transitionConfig(265, 75, 0, 0)}"
					class="mobile-menu-wrapper pt-10 pb-10 rounded-b-2xl flex justify-center items-center bg-[#acbac3] dark:bg-edlCoolSlate"
					role="menu"
				>
					<LayoutWrapper>
						<div class="mobile-nav-items w-full flex flex-wrap" role="presentation">
							<a
								in:fly|global="{transitionConfig(0, 200, 0, -15)}"
								out:fly|global="{transitionConfig(0, 350, 0, -15)}"
								class="mobile-nav-buttons text-center dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								href="/edwindanlopez-resumé.pdf"
								target="_blank"
								role="menuitem"
							>
								<h5 class="nav-item mt-1">Resumé</h5>
							</a>
							<button
								in:fly|global="{transitionConfig(25, 230, 0, -15)}"
								out:fly|global="{transitionConfig(0, 300, 0, -15)}"
								type="button"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#web-dev`)}"
								role="menuitem"
							>
								<h5 class="nav-item">Front-end Dev</h5>
							</button>
							<button
								in:fly|global="{transitionConfig(35, 260, 0, -15)}"
								out:fly|global="{transitionConfig(0, 260, 0, -15)}"
								type="button"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#web-design`)}"
								role="menuitem"
							>
								<h5 class="nav-item">Web Design</h5>
							</button>
							<button
								in:fly|global="{transitionConfig(45, 300, 0, -15)}"
								out:fly|global="{transitionConfig(0, 230, 0, -15)}"
								type="button"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#about`)}"
								role="menuitem"
							>
								<h5 class="nav-item">About</h5>
							</button>
							<button
								in:fly|global="{transitionConfig(55, 350, 0, -15)}"
								out:fly|global="{transitionConfig(0, 200, 0, -15)}"
								type="button"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#contact`)}"
								role="menuitem"
							>
								<h5 class="nav-item">Contact</h5>
							</button>
						</div>
					</LayoutWrapper>
				</div>
			</div>
		</nav>
	</div>
{/if}
