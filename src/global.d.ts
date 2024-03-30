/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
	VITE_RECAPTCHA_PUBLIC_KEY: string;
}

export declare global {
	//allows the use of grecaptcha in window object
	interface Window {
		grecaptcha: ReCAPTCHA;
		handleSubmit: () => void;
	}

	//for custom attribute/event on DOM element: https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
	namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:enterViewport'?: (event: any) => void;
			'on:exitViewport'?: (event: any) => void;
		}
	}
}
