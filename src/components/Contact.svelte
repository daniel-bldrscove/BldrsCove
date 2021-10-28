<script lang="ts">
	import LayoutWrapper from './lib/LayoutWrapper.svelte';

	let formData = {};

	function handleSubmit(e) {}

	function handleChange(e) {
		const target = e.currentTarget;
		console.log('field: ', e.currentTarget.name);
		console.log('Value: ', e.currentTarget.value);
		formData[target.name] = target.value;
	}

	$: console.log('FormData: ', formData);
</script>

<div class=" mt-60 bg-gray-100">
	<LayoutWrapper>
		<div class="pt-48 pb-48">
			<div class="mx-auto text-center">
				<h2 class="mb-16">Drop me a line</h2>
				<h5 class="mb-4">Thanks for checking out my website</h5>
				<p class="w-106 mx-auto">
					If you have a question or would like to inquire about a project, shoot me an email. I do
					my best to respond within 24hrs.
				</p>
				<div class="form-wrapper">
					<form on:submit|preventDefault={handleSubmit}>
						<div>
							<label for="fullname">Full Name</label>
							<input
								on:change={(e) => handleChange(e)}
								name="fullname"
								type="text"
								placeholder="Enter full name"
								value=""
							/>
						</div>
						<div>
							<label for="email">Email</label>
							<input
								on:change={(e) => handleChange(e)}
								name="email"
								type="text"
								placeholder="Enter email"
								value=""
							/>
						</div>
						<div>
							<label for="message">Message</label>
							<textarea
								on:change={(e) => handleChange(e)}
								name="message"
								type="text"
								placeholder="Enter message"
								value=""
							/>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</LayoutWrapper>
</div>
