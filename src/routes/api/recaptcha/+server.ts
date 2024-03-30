import dotenv from 'dotenv';
dotenv.config();

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();
	const token: string = body.captchaToken;

	if (!token) {
		return new Response(
			JSON.stringify({
				status: 401,
				body: JSON.stringify({
					success: false,
					message:
						'There was a problem with the captcha token. Please reach out to the site admin to have this resolved.',
				}),
			}),
		);
	}

	const checkRecaptcha = async () => {
		const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
		const captchaRes = await fetch(verificationUrl, {
			method: 'POST',
		});
		const captcha = await captchaRes.json();

		if (captcha.success || captcha.score > 0.4) {
			return {
				success: true,
				message: 'Captcha verified',
				captchaResponse: captcha,
			};
		} else {
			return {
				error: captcha['error-codes'][0],
				message: 'Captcha did not pass test.',
			};
		}
	};

	const captchaResponse = await checkRecaptcha().then((result) => result);
	return new Response(JSON.stringify(captchaResponse));
}
