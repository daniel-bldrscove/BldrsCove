interface ImportMetaEnv {
  VITE_RECAPTCHA_PUBLIC_KEY: string;
}

// eslint-disable-next-line import/prefer-default-export
export declare global {
	interface Window {
		grecaptcha: ReCAPTCHA;
		handleSubmit: () => void
	}
}