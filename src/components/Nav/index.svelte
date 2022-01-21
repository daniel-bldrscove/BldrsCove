<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { isMobileMenuOpen } from '../../stores';

	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import Dropdown from './Dropdown.svelte';
	import MobileMenu from '../MobileMenu/MobileMenu.svelte';
	import MobileMenuBtn from '../MobileMenu/MobileMenuBtn.svelte';
	import ThemeButton from './ThemeButton.svelte';
	import NavListItem from './NavListItem.svelte';
	import NavDropdownItem from './NavDropdownItem.svelte';

	$: shouldFlyIn = false;

	onMount(() => {
		shouldFlyIn = true;
	});
</script>

<nav
	class="w-full z-[100] flex items-center bg-gray-100 h-24 drop-shadow-xlLight dark:bg-edlDeepBlue"
>
	<LayoutWrapper wrapperClass="relative">
		<div id="navigation" class="w-full flex justify-center items-center sm:justify-between">
			{#if shouldFlyIn}
				<!--Mobile menu button (responsive)-->
				<div
					in:fly="{{
						duration: 200,
						x: -10,
						easing: expoInOut,
					}}"
				>
					<MobileMenuBtn />
				</div>
				<!--Logo & Nav Items-->
				<div class="w-full flex items-center justify-between">
					<!--Logo-->
					<div
						in:fly="{{
							duration: 350,
							x: -10,
							easing: expoInOut,
						}}"
						class="logo-wrapper mx-auto sm:mx-0 "
					>
						<a href="/" rel="external">
							<p
								class="font-medium text-[1.5rem] xs:text-[1.85rem] lg:text-[2rem] lg:mt-2 dark:text-white"
							>
								Edwin Dan Lopez
							</p>
						</a>
					</div>
					<div class="w-auto flex items-center flex-shrink-0">
						<!--Nav Items-->
						<div class="nav-items hidden sm:block sm:justify-self-end mr-4 md:mr-6 lg:mr-10">
							<ul class="flex justify-between items-center w-full">
								<NavListItem animateDelay="{25}" href="/#home-top-section">Home</NavListItem>
								<NavDropdownItem animateDelay="{50}">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<h6 slot="navItem" class="nav-item">Projects</h6>
									<Dropdown
										slot="Dropdown"
										itemHrefs="{{
											hrefA: '/#web-dev',
											hrefB: '/#web-design',
										}}"
									>
										<p slot="dropdown-item-A" class="dark:text-white">Web Development</p>
										<p slot="dropdown-item-B" class="dark:text-white">Web Design</p>
									</Dropdown>
								</NavDropdownItem>
								<NavListItem animateDelay="{100}" href="/#about">About</NavListItem>
								<NavListItem animateDelay="{150}" href="/#contact">Contact</NavListItem>
							</ul>
						</div>
						<!--Theme Button-->
						<ThemeButton />
					</div>
				</div>
			{/if}
		</div>
	</LayoutWrapper>
</nav>

<!-- Mobile menu, show/hide based on menu state. -->
{#if $isMobileMenuOpen}
	<MobileMenu />
{/if}
