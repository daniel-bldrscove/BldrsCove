<style lang="postcss">
	.technologies-table {
		@apply content-center items-center border-separate rounded-md overflow-hidden mt-2;
	}
	.technologies-table td {
		@apply p-1 bg-[#e2e5eb] dark:bg-[#1a2032];
	}
</style>

<script lang="ts">
	import Icon from '../../shared/Icon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import OpenLinkIcon from '$lib/icons/OpenLinkIcon.svelte';
	import Modal, { getModal } from '../../shared/Modal.svelte';
	import { themeMode, colors } from '../../../stores';
	import type { DevProjectTypes } from '../../../../types/ComponentTypes';

	export let devProjectProps: Omit<DevProjectTypes, 'coverImage' | 'coverImageAlt'>;

	export let { title, subhead, description, excerpt, techStack, gitHubLink, projectLink } =
		devProjectProps;

	const rows = [0, 1]; // num rows (2)
</script>

<div
	class="bg-gray-100 p-6 shadow-2xl lg:shadow-none rounded-b-lg sm:rounded-lg sm:p-12 lg:rounded-l-none dark:bg-edlDeepBlue h-full flex justify-center items-center">
	<div>
		<h4 class="text-edlDeepBlue dark:text-ashenHighContrast-dark">
			{title}
		</h4>
		<p class="sm-title mt-1 mb-8 text-ashenMidContrast-light dark:text-ashenHighContrast-dark">
			{subhead}
		</p>
		<span>
			<a href="{gitHubLink}" target="_blank" rel="external" class="inline-block">
				<span class="flex">
					<Icon
						strokeColor="{$colors.midBlue}"
						fillColor="#2f75d6"
						width="32"
						height="32"
						name="github-icon"
						svgClass="inline-block">
						<GithubIcon />
					</Icon>
					<p
						class="font-niveauGrotesk font-medium text-sm mt-[2px] -ml-1 slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue">
						View GitHub
					</p>
				</span>
			</a>
			<a href="{projectLink}" target="_blank" rel="external" class="inline-block ml-8">
				<span class="flex">
					<Icon
						strokeColor="{$colors.midBlue}"
						fillColor="transparent"
						width="32"
						height="32"
						name="open-link-icon"
						svgClass="inline-block">
						<OpenLinkIcon />
					</Icon>
					<p
						class="font-niveauGrotesk font-medium text-sm mt-[2px] -ml-1 slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue">
						View Site
					</p>
				</span>
			</a>
		</span>
		<span class="mt-3 mb-8 block">
			<p
				id="dev-card-excerpt"
				class="inline text-ashenHighContrast-light text-[0.95rem] leading-[1.35rem] mr-2 dark:text-ashenMidContrast-dark">
				{excerpt}
			</p>
			<button on:click="{() => getModal(title).open()}"
				><p class="text-sm text-edlMidBlue">Read more...</p></button>
		</span>

		<!--Modal Start-->
		<Modal bind:id="{title}">
			<h4 class="text-edlDeepBlue dark:text-ashenHighContrast-dark">
				{title}
			</h4>
			<p class="sm-title mt-1 mb-8 text-ashenMidContrast-light dark:text-ashenHighContrast-dark">
				{subhead}
			</p>
			<p
				id="dev-card-content"
				class="text-ashenHighContrast-light text-[0.95rem] leading-[1.35rem] dark:text-ashenMidContrast-dark">
				{description}
			</p>
		</Modal>
		<!--Modal End-->

		<p class="sm-title font-sans font-bold text-edlDeepBlue mb-2 tracking-wider">
			Technologies Used
		</p>
		<table class="table-auto technologies-table w-full">
			<tbody>
				{#each rows as row}
					{#if row === 0}
						<tr>
							{#each techStack.slice(0, 3) as technology, index}
								<td>
									<p class="caption text-xs ml-2 text-edlDeepBlue dark:text-ashenMidContrast-dark">
										{technology}
									</p>
								</td>
							{/each}
						</tr>
					{:else}
						<tr>
							{#each techStack.slice(3, 6) as technology, index}
								<td>
									<p class="caption text-xs ml-2 text-edlDeepBlue dark:text-ashenMidContrast-dark">
										{technology}
									</p>
								</td>
							{/each}
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	</div>
</div>
