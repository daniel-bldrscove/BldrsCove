declare module 'vanta/dist/vanta.halo.min';

interface ImportMetaEnv {
  VITE_RECAPTCHA_PUBLIC_KEY: string;
}

export declare global {
	interface Window {
		grecaptcha: ReCAPTCHA;
		handleSubmit: () => void
	}
}