<style>
</style>

<script lang="ts">
	import { isMobileMenuOpen } from '../../stores';
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import Dropdown from './Dropdown.svelte';
	import MobileMenu from '../MobileMenu/MobileMenu.svelte';
	import MobileMenuBtn from '../MobileMenu/MobileMenuBtn.svelte';
	import ThemeButton from './ThemeButton.svelte';
	import NavListItem from './NavListItem.svelte';
	import NavDropdownItem from './NavDropdownItem.svelte';
</script>

<nav
	class="relative w-full flex items-center bg-gray-100 h-24 drop-shadow-xlLight dark:bg-edlDeepBlue">
	<LayoutWrapper wrapperClass="relative">
		<div id="navigation" class="w-full flex justify-center sm:justify-between items-center">
			<!--Mobile menu button (responsive)-->
			<MobileMenuBtn />

			<!--Logo & Nav Items-->
			<div class="w-full flex items-center justify-between">
				<!--Logo-->
				<div class="logo-wrapper mx-auto sm:mx-0 sm:self-start">
					<a href="/" rel="external">
						<p class="font-medium text-[2rem] mt-2 dark:text-edlLtGray">Edwin Dan Lopez</p>
					</a>
				</div>
				<div class="w-auto flex items-center flex-shrink-0">
					<!--Nav Items-->
					<div class="nav-items hidden sm:block sm:justify-self-end mr-4 md:mr-6 lg:mr-10">
						<ul class="flex justify-between items-center w-full">
							<NavListItem href="/#home-top-section">Home</NavListItem>
							<NavListItem href="/#about">About</NavListItem>
							<NavDropdownItem>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<h6 slot="navItem" class="nav-item dark:text-edlLtGray">Projects</h6>
								<Dropdown
									slot="Dropdown"
									itemHrefs="{{
										hrefA: '/#web-dev',
										hrefB: '/#web-design',
									}}">
									<p slot="dropdown-item-A">Web Development</p>
									<p slot="dropdown-item-B">Web Design</p>
								</Dropdown>
							</NavDropdownItem>
							<NavListItem href="/#contact">Contact</NavListItem>
						</ul>
					</div>
					<!--Theme Button-->
					<ThemeButton />
				</div>
			</div>
		</div>
	</LayoutWrapper>
</nav>

<!-- Mobile menu, show/hide based on menu state. -->
{#if $isMobileMenuOpen}
	<MobileMenu />
{/if}
