<script lang="ts">
	import LayoutWrapper from '../shared/LayoutWrapper.svelte';
	import LayoutContainLg from '../shared/LayoutContainLg.svelte';
	import FormFeedback from './FormFeedback.svelte';
	import FormHeadingDesc from './FormHeadingDesc.svelte';
	import FormFields from './FormFields.svelte';

	let submitted: boolean = false;
	let submissionSuccess: boolean = false;
	let error: null = null;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a id="contact" class="anchor-tag"></a>
<div class="bg-edlPaleStone dark:bg-edlCoolSlate">
	<LayoutWrapper>
		<LayoutContainLg>
			<div class="pt-16 pb-16 sm:pt-32 sm:pb-32">
				<div class="mx-auto text-center">
					<FormHeadingDesc />
					<FormFields
						bind:submitted="{submitted}"
						bind:submissionSuccess="{submissionSuccess}"
						bind:error="{error}"
					/>
					<FormFeedback
						submitted="{submitted}"
						submissionSuccess="{submissionSuccess}"
						error="{error || ''}"
					/>
				</div>
			</div>
		</LayoutContainLg>
	</LayoutWrapper>
</div>
