interface ImportMetaEnv {
  VITE_RECAPTCHA_PUBLIC_KEY: string;
}

export declare global {
	interface Window {
		grecaptcha: ReCAPTCHA;
	}
}