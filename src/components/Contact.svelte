<script lang="ts">
	import { onMount } from 'svelte';
	import { Jellyfish } from 'svelte-loading-spinners';
	import LayoutWrapper from '$lib/subComponents/LayoutWrapper.svelte';
	import LayoutContainLg from '$lib/subComponents/LayoutContainLg.svelte';
	import { themeMode, colors } from '../stores';
	import { variables } from '$lib/variables';
	import { contactFormSchema } from '$lib/utilities/validatorsSchema';
	import RemainingCharacters from '$lib/subComponents/RemainingCharacters.svelte';
	import FormFeedback from '$lib/subComponents/FormFeedback.svelte';

	let fullName: string = null;
	let email: string = null;
	let message: string = '';
	let submitting: boolean = false;
	let submitted: boolean = false;
	let submissionSuccess: boolean = null;
	let error = null;
	$: isDisabled = true;
	$: messageLength = message.length;
	$: contactFormSchema
		.isValid({
			fullName,
			email,
			message
		})
		.then((valid: boolean) => {
			valid ? (isDisabled = false) : (isDisabled = true);
		});

	const handleSubmit = async () => {
		submitting = true;

		const handleCaptcha = new Promise((resolve, reject) => {
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

		handleCaptcha.then(async (captchaResult: Record<string, unknown>) => {
			const result = await captchaResult.success;
			// console.log('Captcha result: ', result);

			// if successful captcha - proceed
			if (result) {
				try {
					let res = await fetch('https://usebasin.com/f/694d15cb7f69', {
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							fullName,
							email,
							message
						})
					});

					if (res.ok || res.status === 200) {
						flashFeedback(true);
						fullName = '';
						email = '';
						message = '';
						isDisabled = true;
						submitting = false;
					}
				} catch (error) {
					flashFeedback(false, error);
					fullName = '';
					email = '';
					message = '';
					submitting = false;
					console.log({
						error: error,
						message: 'Submission error. Please try again later.'
					});
					isDisabled = true;
				}
			} else {
				// else - submission unsuccessful, show error

				submitting = false;
				isDisabled = true;
				flashFeedback(false, 'Submission error, please try again later.');
			}
		});
	};

	onMount(() => {
		window.handleSubmit = handleSubmit;
	});

	const flashFeedback = (wasSuccessful?: boolean, err?: string): void => {
		submitted = true;
		submissionSuccess = wasSuccessful;
		if (err) {
			error = err;
		}
		setTimeout(() => {
			submitted = false;
			submissionSuccess = null;
		}, 5000);
	};
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="contact" class="anchor-tag" />
<div class="bg-bldrsCovePaleStone dark:bg-bldrsCoveCoolSlate">
	<LayoutWrapper>
		<LayoutContainLg>
			<div class="pt-16 pb-16 sm:pt-32 sm:pb-32">
				<div class="mx-auto text-center">
					<h2
						class="mb-6 sm:mb-16 text-4xl sm:text-current text-bldrsCoveDeepBlue dark:text-bldrsCoveLtGray"
					>
						Drop me a line ✍🏼
					</h2>
					<h5 class="w-8/12 sm:w-11/12 mx-auto mb-6 sm:mb-4 text-bldrsCoveMidBlue">
						Thanks for checking out my website
					</h5>
					<p
						class="w-full mx-auto text-ashenMidContrast-light dark:text-ashenMidContrast-dark md:w-7/12 2xl:w-5/12"
					>
						If you have a question or would like to inquire about a project, shoot me an email. I do
						my best to respond within 24hrs.
					</p>
					<div class="w-full form-wrapper mt-20 mx-auto">
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
									<a
										href="https://policies.google.com/privacy"
										rel="noopener noreferrer"
										class="inline underline"
									>
										Privacy Policy
									</a>
									and
									<a
										href="https://policies.google.com/terms"
										rel="noopener noreferrer"
										class="inline underline"
									>
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
									disabled={isDisabled}
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
						<FormFeedback {submitted} {submissionSuccess} {error} />
					</div>
				</div>
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>

<style>
</style>
