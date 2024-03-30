export default function handleCaptcha(variables: { recaptchaSiteKey: string }) {
	return new Promise((resolve, reject) => {
		// get captcha token
		window.grecaptcha.ready(function () {
			window.grecaptcha
				.execute(variables.recaptchaSiteKey, { action: 'submit' })
				.then(async (token: string) => {
					// process captcha
					try {
						let captcha = await fetch('/api/recaptcha', {
							method: 'POST',
							body: JSON.stringify({
								captchaToken: token,
							}),
						});

						if (captcha.ok || captcha.status === 200) {
							const result = await captcha.json();
							if (result.error) {
								reject(new Error(`${result.error}. ${result.message}`));
							}

							resolve(result);
						} else {
							reject(new Error('Captcha response status code was not 200'));
						}
					} catch (error) {
						console.log('Recaptcha error: ', error);
						reject(error);
					}
				});
		});
	});
}
