<script lang="ts">
	import RemainingCharacters from '../shared/RemainingCharacters.svelte';
	import { onMount } from 'svelte';
	import { Jellyfish } from 'svelte-loading-spinners';
	import { themeMode } from '../../../stores';
	import { variables } from '$lib/utilities/variables';
	import googleRecaptcha from '$lib/utilities/googleRecaptcha';
	import contactFormSchema from '$lib/utilities/validatorsSchema';

	export let submitted = false;
	export let submissionSuccess = null;
	export let error;
	let submitting = false;
	let fullName = '';
	let message = '';
	let email = '';

	let disabled = true;
	$: messageLength = message.length;
	$: contactFormSchema
		.isValid({
			fullName,
			email,
			message,
		})
		.then((valid: boolean) => {
			valid ? (disabled = false) : (disabled = true);
		});

	const flashFeedback = function (succeeded?: boolean, err?: string): void {
		submissionSuccess = succeeded;
		submitted = true;
		submitting = false;
		disabled = true;
		fullName = '';
		email = '';
		message = '';
		if (err) {
			error = err;
		}
		setTimeout(() => {
			submissionSuccess = null;
			submitted = false;
		}, 5000);
	};

	const handleSubmit = function () {
		if (!fullName || !email || !message) {
			disabled = true;
			submitting = false;
			return;
		}
		submitting = true;
		return googleRecaptcha(variables)
			.then(async (captcha) => {
				const success = (captcha as any).success;
				if (success) {
					try {
						const res = await fetch('https://usebasin.com/f/694d15cb7f69', {
							method: 'POST',
							headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								fullName,
								email,
								message,
							}),
						});
						if (res.ok || res.status === 200) {
							flashFeedback(true);
						} else {
							throw new Error('Fetch request failed. Please try again.');
						}
					} catch (err) {
						flashFeedback(false, err as string);
					}
				}
			})
			.catch((err) => {
				console.error('Error: ', err);
				flashFeedback(false, err as string);
			});
	};

	onMount(() => {
		// initialize handleSubmit method to window in order to run recaptcha on submit
		window.handleSubmit = handleSubmit;
	});
</script>

<div class="w-full form-wrapper mt-20 mx-auto">
	<form
		on:submit|preventDefault="{handleSubmit}"
		class="grid grid-cols-2 gap-6 text-left"
		acceptCharset="UTF-8"
	>
		<div class="col-span-1">
			<label for="fullname">Full Name</label>
			<input bind:value="{fullName}" name="fullname" type="text" placeholder="Enter full name" />
		</div>
		<div class="col-span-1">
			<label for="email">Email</label>
			<input bind:value="{email}" name="email" type="email" placeholder="Enter email" />
		</div>
		<div class="col-span-2 flex flex-wrap mt-4">
			<span class="w-full flex justify-between">
				<label for="message" class="inline-block">Message</label>
				<RemainingCharacters bind:messageLength="{messageLength}" />
			</span>
			<textarea
				bind:value="{message}"
				class="{`${
					$themeMode === 'dark' && 'dark'
				} w-full leading-8 resize-none bg-local font-niveauGrotesk align-text-bottom bg-transparent dark:text-ashenHighContrast-dark`}"
				name="message"
				placeholder="Enter message"
				required
				rows="5"
				cols="60"
			></textarea>
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
				class="g-recaptcha bg-edlMidBlue h-14 w-full drop-shadow-xl rounded-2xl group-hover:bg-edlOrange transition duration-300 ease-in-out group-hover:scale-105 dark:group-hover:text-white disabled:bg-ashenLowContrast-light disabled:opacity-60 group-hover:disabled:scale-100 group-hover:disabled:bg-ashenLowContrast-light group-hover:disabled:cursor-default"
				data-sitekey="{variables.recaptchaSiteKey}"
				data-callback="handleSubmit"
				data-action="submit"
				disabled="{disabled}"
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
</div>
