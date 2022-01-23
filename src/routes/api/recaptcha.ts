import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').RequestHandler} */
// eslint-disable-next-line import/prefer-default-export
export async function post({request}) {
	const body = await request.json();
	const token = body.captchaToken;

	if (!token) {
		return {
			status: 401,
			body: JSON.stringify({
				success: false,
				message: 'There was a problem with the recaptcha in your request. Please try again later.',
			}),
		};
	}

	const checkRecaptcha = async () => {
		const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

		const captchaRes = await fetch(verificationUrl, {
			method: 'POST',
		});

		const captcha = await captchaRes.json();
		// console.log('Recaptcha response: ', captcha);

		if (captcha.success || captcha.score > 0.4) {
			return {
				success: true,
				message: 'Captcha verified',
				captchaResponse: captcha,
			};
		}
		return {
			error: captcha['error-codes'][0],
			message: 'Encountered Error with ReCaptcha',
		};
	};

	return checkRecaptcha().then((result) => ({
		body: JSON.stringify(result),
	}));
}
