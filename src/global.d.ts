/// <reference types="@sveltejs/kit" />

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onenterviewport?: (event: CustomEvent<T> & { target: EventTarget & T }) => any;
		onexitviewport?: (event: CustomEvent<T> & { target: EventTarget & T }) => any;
	}
}
