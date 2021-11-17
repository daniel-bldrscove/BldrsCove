<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '../stores';
	import { browser } from '$app/env';

	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import CarrotIcon from '$lib/icons/CarrotIcon.svelte';
	import CarrotDownIcon from '$lib/icons/CarrotDownIcon.svelte';
	import bldrsCoveLogoLight from '../images/bldrscove-logo-light-md.png';
	import bldrsCoveLogoDark from '../images/bldrscove-logo-dark-md.png';
	import DropDownNav from '$lib/subComponents/DropDownNav.svelte';
	import MobileMenu from '$lib/subComponents/MobileMenu.svelte';
	import MobileMenuBtn from '$lib/subComponents/MobileMenuBtn.svelte';
	import ThemeButton from '$lib/subComponents/ThemeButton.svelte';

	let isMobileMenuOpen: boolean = false;

	let scrollToSection = (route: string): void => {
		window.location.href = route;
		handleMobileMenu();
	};

	let scrollY: string;

	browser &&
		window.addEventListener('scroll', () => {
			document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});

	// maintain scroll location on desktop and mobile when modal is open or hidden
	let handleMobileMenu = (): void => {
		// close modal
		if (isMobileMenuOpen) {
			// window.scrollTo(0, parseInt(scrollY || '0'));
			document.body.style.top = '';
			document.body.classList.remove('modal-open');
			isMobileMenuOpen = false;
		} else {
			// open modal
			const scrolled = document.documentElement.style.getPropertyValue('--scroll-y');
			document.body.style.top = `-${scrolled}`;
			document.body.classList.add('modal-open');
			scrollY = scrolled;
			isMobileMenuOpen = true;
		}
	};

	onMount(() => {
		// if theme hasn't been already set in local storage
		// decide according to user theme preference or theme class
		if (!window.localStorage.theme) {
			const theme =
				window.matchMedia('(prefers-color-scheme: dark)').matches ||
				document.documentElement.className === 'dark'
					? 'dark'
					: 'light';
			themeMode.update((val) => (val = theme));
		} else {
			// decide according to whats been set in local storage
			const theme = window.localStorage.theme === 'dark' ? 'dark' : 'light';
			themeMode.update((val) => (val = theme));
		}
	});
</script>

<nav
	class="relative w-full flex items-center bg-gray-100 h-24 drop-shadow-xlLight dark:bg-bldrsCoveDeepBlue"
>
	<LayoutWrapper wrapperClass="relative">
		<div id="navigation" class="w-full flex justify-center sm:justify-between items-center">
			<!--Mobile menu button (responsive)-->
			<MobileMenuBtn {handleMobileMenu} />

			<!--Logo & Nav Items-->
			<div class="w-full flex items-center justify-between">
				<!--Logo-->
				<div class="logo-wrapper mx-auto sm:mx-0 sm:self-start">
					<a href="/#" rel="external">
						<img
							src={$themeMode === 'dark' ? bldrsCoveLogoDark : bldrsCoveLogoLight}
							alt="BldrsCove Logo"
							class="w-36 md:w-40 ml-12 sm:ml-0"
						/>
					</a>
				</div>
				<div class="w-auto flex items-center flex-shrink-0">
					<!--Nav Items-->
					<div class="nav-items hidden sm:block sm:justify-self-end mr-4 md:mr-6 lg:mr-10">
						<ul class="flex justify-between items-center w-full">
							<li>
								<h6>
									<a
										href="/#home-top-section"
										rel="external"
										class="nav-item slide-left-right dark:text-bldrsCoveLtGray">Home</a
									>
								</h6>
							</li>
							<li class="ml-4 md:ml-6 lg:ml-10">
								<h6>
									<a
										href="/#about"
										rel="external"
										class="nav-item slide-left-right dark:text-bldrsCoveLtGray">About</a
									>
								</h6>
							</li>
							<li class="relative group block h-auto ml-4 md:ml-6 lg:ml-10">
								<div class="hidden absolute top-4 mt-2 ml-8 group-hover:block group-hover:h-full">
									<DropDownNav />
								</div>
								<h6>
									<span class="flex justify-content items-center">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<h6 class="nav-item dark:text-bldrsCoveLtGray">Projects</h6>
										<CarrotIcon
											strokeColor={$themeMode === 'dark' ? '#cccccc' : '#333742'}
											fillColor="transparent"
											width="14"
											height="14"
											name="sun-icon"
											svgClass="transform -rotate-90 group-hover:transition group-hover:duration-350 group-hover:ease-in-out group-hover:rotate-0"
										>
											<CarrotDownIcon />
										</CarrotIcon>
									</span>
								</h6>
							</li>
							<li class="ml-4 md:ml-6 lg:ml-10">
								<h6>
									<a
										href="/#contact"
										rel="external"
										class="nav-item slide-left-right dark:text-bldrsCoveLtGray">Contact</a
									>
								</h6>
							</li>
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
{#if isMobileMenuOpen}
	<MobileMenu {scrollToSection} />
{/if}

<style>
</style>
