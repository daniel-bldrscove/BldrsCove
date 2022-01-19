<style>
	.visible {
		visibility: visible;
	}
</style>

<script context="module" lang="ts">
	let onTop; //keeping track of which open modal is on top
	const modals = {}; //all modals get registered here for easy future access

	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id = '') {
		return modals[id];
	}
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import { onDestroy } from 'svelte';
	import Icon from './Icon.svelte';
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import { themeMode, colors } from '../../stores';

	let topDiv: HTMLElement;
	let visible = false;
	let prevOnTop: HTMLElement;
	let closeCallback: any;

	export let id = '';

	function keyPress(ev) {
		//only respond if the current modal is the top one
		if (ev.key == 'Escape' && onTop == topDiv) close(); //ESC
	}

	/**  API **/
	function open(callback?: () => void) {
		closeCallback = callback;
		if (visible) return;
		prevOnTop = onTop;
		onTop = topDiv;
		browser && window.addEventListener('keydown', keyPress);

		//this prevents scrolling of the main window on larger screens
		document.body.style.overflow = 'hidden';

		visible = true;
		//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
		document.body.appendChild(topDiv);
	}

	function close(retVal?: HTMLElement) {
		if (!visible) return;
		browser && window.removeEventListener('keydown', keyPress);
		onTop = prevOnTop;
		if (onTop == null) document.body.style.overflow = '';
		visible = false;
		if (closeCallback) closeCallback(retVal);
	}

	//expose the API
	modals[id] = { open, close };

	onDestroy(() => {
		delete modals[id];
		browser && window.removeEventListener('keydown', keyPress);
	});
</script>

<div
	id="topModal"
	class="{`invisible z-[9999] fixed top-0 bottom-0 right-0 left-0 bg-[#eaf6ffe6] dark:bg-[#090d1ae6] flex justify-center items-center ${
		visible ? `visible !important` : ``
	}`}"
	bind:this="{topDiv}"
	on:click="{() => close()}">
	<div
		id="modal"
		on:click|stopPropagation="{() => {}}"
		class="relative w-11/12 sm:w-8/12 md:w-7/12 lg:w-[35rem] rounded-lg bg-white dark:bg-edlDeepBlue border-2 border-edlMidBlue dark:border-edlBrightBlue shadow-2xl p-8">
		<button
			on:click="{() => close()}"
			class="absolute -top-4 -right-4 cursor-pointer bg-white dark:bg-edlDeepBlue border-2 border-edlMidBlue dark:border-edlBrightBlue  rounded-full transition duration-100 ease-in-out transform hover:scale-125 flex justify-center items-center">
			<Icon
				strokeColor="{$themeMode === 'dark' ? $colors.brightBlue : $colors.midBlue}"
				fillColor="transparent"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				name="close-icon"
				svgClass="block p-[5px]">
				<CloseIcon />
			</Icon>
		</button>
		<div
			id="modal-content"
			class="max-h-[460px] overflow-y-scroll sm:max-h-auto sm:overflow-y-auto">
			<slot />
		</div>
	</div>
</div>
