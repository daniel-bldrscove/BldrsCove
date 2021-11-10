<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Jellyfish } from 'svelte-loading-spinners';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import { themeMode, colors } from '../stores';
	import { variables } from '$lib/variables';
	import Icon from '$lib/subComponents/Icon.svelte';
	import HandWavingIcon from '$lib/icons/HandWavingIcon.svelte';
	import { contactFormSchema } from '$lib/validatorsSchema';
	import RemainingCharacters from '$lib/subComponents/RemainingCharacters.svelte';

	let fullName: string = '';
	let email: string = '';
	let message: string = '';
	let isValid: boolean = null;
	let submitting = false;
	let submitted = false;
	$: messageLength = message.length;

	$: contactFormSchema
		.isValid({
			fullName,
			email,
			message
		})
		.then(function (valid: boolean) {
			isValid = valid;
		});

	const handleSubmit = async () => {
		// get captcha token
		const handleCaptcha = new Promise((resolve, reject) => {
			window.grecaptcha.ready(function () {
				window.grecaptcha
					.execute(variables.recaptchaSiteKey, { action: 'submit' })
					.then(async (token: string) => {
						try {
							let captcha = await fetch('/api/recaptcha', {
								method: 'POST',
								body: JSON.stringify({
									captchaToken: token
								})
							});

							if (captcha.ok || captcha.status === 200) {
								const result = await captcha.json();
								resolve(result);
							}
						} catch (error) {
							console.log('Recaptcha error: ', error);
							reject(error);
						}
					});
			});
		});

		submitting = true;

		handleCaptcha.then(async (captchaResult) => {
			// console.log('Captcha Result: ', captchaResult);

			try {
				// let res = await fetch('https://usebasin.com/f/694d15cb7f69', {
				// 	method: 'POST',
				// 	headers: {
				// 		Accept: 'application/json',
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 		fullName,
				// 		email,
				// 		message
				// 	})
				// });

				let res = { ok: true, status: 200 };

				if (res.ok || res.status === 200) {
					setTimeout(() => {
						flashFeedback(4000);
						fullName = '';
						email = '';
						message = '';
						submitting = false;
					}, 1500);
				}
			} catch (error) {
				fullName = '';
				email = '';
				message = '';
				submitting = false;
				console.log({
					error: error,
					message: 'Submission error. Please try again later.'
				});
				throw new Error(error);
			}
		});
	};

	const flashFeedback = (milSec: number) => {
		submitted = true;
		setTimeout(() => {
			submitted = false;
		}, milSec);
	};
</script>

<div id="contact" class="bg-bldrsCovePaleStone dark:bg-bldrsCoveCoolSlate">
	<LayoutWrapper>
		<div class="pt-32 pb-32">
			<div class="mx-auto text-center">
				<h2 class="mb-16 text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray">Hey there!</h2>
				<h5 class="mb-4 text-bldrsCoveMidBlue">Thanks for checking out my website</h5>
				<p class="w-106 mx-auto text-ashenMidContrast-light dark:text-ashenMidContrast-dark">
					If you have a question or would like to inquire about a project, shoot me an email. I do
					my best to respond within 24hrs.
				</p>
				<div class="form-wrapper mt-20 sm:w-120 mx-auto">
					<form
						on:submit|preventDefault={handleSubmit}
						class="grid grid-cols-2 gap-6 text-left"
						accept-charset="UTF-8"
					>
						<div class="col-span-1">
							<label for="fullname">Full Name</label>
							<input
								bind:value={fullName}
								name="fullname"
								type="text"
								placeholder="Enter full name"
							/>
						</div>
						<div class="col-span-1">
							<label for="email">Email</label>
							<input bind:value={email} name="email" type="email" placeholder="Enter email" />
						</div>
						<div class="col-span-2 flex flex-wrap mt-4">
							<span class="w-full flex justify-between">
								<label for="message" class="inline-block">Message</label>
								<RemainingCharacters bind:messageLength />
							</span>
							<textarea
								bind:value={message}
								class={`${
									$themeMode === 'dark' && 'dark'
								} w-full leading-8 resize-none bg-local font-firaMono align-text-bottom bg-transparent dark:text-ashenMidContrast-dark`}
								name="message"
								type="text"
								placeholder="Enter message"
								rows="5"
								cols="60"
							/>
						</div>
						<div class="w-full inline col-span-2">
							<p
								class="inline caption text-[11px] text-ashenLowContrast-light dark:text-ashenLowContrast-dark"
							>
								This site is protected by reCAPTCHA and the Google
								<a href="https://policies.google.com/privacy" class="inline underline">
									Privacy Policy
								</a>
								and
								<a href="https://policies.google.com/terms" class="inline underline">
									Terms of Service
								</a>{' '}
								apply.
							</p>
						</div>
						<div class="col-span-2 mt-4 group">
							<button
								class="g-recaptcha bg-bldrsCovePureBlue h-14 w-full drop-shadow-xl rounded-2xl group-hover:bg-bldrsCoveMidBlue transition duration-300 ease-in-out group-hover:scale-105 dark:group-hover:text-white disabled:bg-ashenLowContrast-light disabled:opacity-60 group-hover:disabled:scale-100 group-hover:disabled:bg-ashenLowContrast-light group-hover:disabled:cursor-default"
								data-sitekey={variables.recaptchaSiteKey}
								data-callback="handleSubmit"
								data-action="submit"
								disabled={!isValid}
							>
								{#if submitting}
									<div class="flex justify-center items-center">
										<Jellyfish size="55" color="white" unit="px" duration="1s" />
									</div>
								{:else}
									<h6 class="text-white">Submit</h6>
								{/if}
							</button>
						</div>
					</form>
					<div class="form-feedback relative">
						{#if submitted}
							<div
								class="submission-feedback w-full absolute mt-6 mb-6 mx-auto"
								transition:fly={{ y: 10, duration: 150 }}
							>
								<span
									class="inline-block text-ashenMidContrast-light dark:text-ashenMidContrast-dark"
								>
									<Icon
										strokeColor={$themeMode === 'dark' ? $colors.brightBlue : $colors.pureBlue}
										fillColor="transparent"
										width="32"
										height="32"
										viewBox="0 0 256 256"
										name="hand-wave-icon"
										svgClass="inline-block mr-2"
									>
										<HandWavingIcon />
									</Icon>
									<p
										class={`${
											$themeMode === 'dark' ? 'text-bldrsCoveBrightBlue' : 'text-bldrsCovePureBlue'
										} inline-block text-lg`}
									>
										Thanks for your submission. Your message has been sent!
									</p>
								</span>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</LayoutWrapper>
</div>

<style>
</style>
