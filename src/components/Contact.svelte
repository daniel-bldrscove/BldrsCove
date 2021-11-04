<script lang="ts">
	import LayoutWrapper from './lib/LayoutWrapper.svelte';
	import Button from './lib/Button.svelte';

	let formData = {};

	function handleSubmit(e) {}

	function handleChange(e) {
		const target = e.currentTarget;
		console.log('field: ', e.currentTarget.name);
		console.log('Value: ', e.currentTarget.value);
		formData[target.name] = target.value;
	}

	// $: console.log('FormData: ', formData);
</script>

<div id="contact" class="bg-gray-100 dark:bg-bldrsCovePureBlue">
	<LayoutWrapper>
		<div class="pt-48 pb-48">
			<div class="mx-auto text-center">
				<h2 class="mb-16">Drop me a line</h2>
				<h5 class="mb-4">Thanks for checking out my website</h5>
				<p class="w-106 mx-auto">
					If you have a question or would like to inquire about a project, shoot me an email. I do
					my best to respond within 24hrs.
				</p>
				<div class="form-wrapper mt-20 sm:w-120 mx-auto">
					<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-2 gap-6 text-left">
						<div class="col-span-1">
							<label for="fullname">Full Name</label>
							<input
								class="w-full block"
								on:change={(e) => handleChange(e)}
								name="fullname"
								type="text"
								placeholder="Enter full name"
								value=""
							/>
						</div>
						<div class="col-span-1">
							<label for="email">Email</label>
							<input
								class="w-full block"
								on:change={(e) => handleChange(e)}
								name="email"
								type="text"
								placeholder="Enter email"
								value=""
							/>
						</div>
						<div class="col-span-2 flex flex-wrap mt-4">
							<label for="message">Message</label>
							<textarea
								class="w-full leading-8 resize-none bg-local font-firaMono align-text-bottom textarea-hr bg-transparent"
								on:change={(e) => handleChange(e)}
								name="message"
								type="text"
								placeholder="Enter message"
								value=""
								rows="5"
								cols="60"
							/>
						</div>
						<div class="col-span-2 mt-4">
							<Button type="submit" variant="primary">Submit</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</LayoutWrapper>
</div>

<style>
	input {
		@apply h-8 align-bottom border-b border-ashenLowContrast-light pt-3 font-firaMono bg-transparent;
	}

	label {
		@apply text-xs tracking-wider uppercase text-ashenMidContrast-light mb-2 block opacity-60;
	}

	.textarea-hr {
		background-image: linear-gradient(to right, transparent 10px, transparent 10px),
			linear-gradient(to left, transparent 10px, transparent 10px),
			repeating-linear-gradient(
				transparent 0rem,
				transparent 1.6rem,
				rgba(51, 55, 66, 0.4) 1.6rem,
				transparent 1.7rem,
				transparent 2rem /*This needs to match the lineheight*/
			);
	}
</style>
