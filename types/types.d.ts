// import type { Spring } from 'svelte/motion';

interface ImportMetaEnv {
	VITE_RECAPTCHA_PUBLIC_KEY: string;
}

// eslint-disable-next-line import/prefer-default-export
export declare global {
	interface Window {
		grecaptcha: ReCAPTCHA;
		handleSubmit: () => void;
	}

	// TODO: extend svg type - attempt below is incorrect
	// interface IntrinsicElements {
	// 		'svg': svelte.JSX.SVGProps<SVGSVGElement | Spring<number>>;
	// }
}
