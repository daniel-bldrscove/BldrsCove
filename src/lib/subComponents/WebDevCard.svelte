<script lang="ts">
	import Icon from '$lib/subComponents/Icon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import OpenLinkIcon from '$lib/icons/OpenLinkIcon.svelte';

	export let title: string;
	export let subhead: string;
	export let description: string;
	export let techStack: string[];
	export let gitHubLink: string;
	export let projectLink: string;

	$: console.log('Tech Stack: ', techStack);

	let techHolder = JSON.stringify(techStack);
	const rows = [0, 1]; // num rows (2)
	const cols = [0, 1, 2]; // num columns (3)
</script>

<div
	class="bg-gray-100 p-6 shadow-2xl lg:shadow-none rounded-b-lg sm:rounded-lg sm:p-12 lg:rounded-l-none dark:bg-bldrsCoveDeepBlue h-full flex justify-center items-center"
>
	<div>
		<h4 class="text-bldrsCoveDeepBlue dark:text-ashenHighContrast-dark">
			{title}
		</h4>
		<p class="sm-title mt-1 mb-8 text-ashenMidContrast-light dark:text-ashenHighContrast-dark">
			{subhead}
		</p>
		<span>
			<a href={gitHubLink} target="_blank" rel="external" class="inline-block">
				<span class="flex">
					<Icon
						strokeColor="transparent"
						fillColor="#2f75d6"
						width="32"
						height="32"
						name="github-icon"
						svgClass="inline-block"
					>
						<GithubIcon />
					</Icon>
					<p
						class="caption mt-1 -ml-1 slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-bldrsCoveBrightBlue"
					>
						View GitHub
					</p>
				</span>
			</a>
			<a href={projectLink} target="_blank" rel="external" class="inline-block ml-8">
				<span class="flex">
					<Icon
						strokeColor="#2f75d6"
						fillColor="transparent"
						width="32"
						height="32"
						name="open-link-icon"
						svgClass="inline-block"
					>
						<OpenLinkIcon />
					</Icon>
					<p
						class="caption mt-1 -ml-1 slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-bldrsCoveBrightBlue"
					>
						View Site
					</p>
				</span>
			</a>
		</span>
		<p
			id="dev-card-content"
			class="mt-3 mb-8 text-ashenHighContrast-light text-[0.95rem] leading-[1.35rem] dark:text-ashenMidContrast-dark"
		>
			{description}
		</p>
		<p class="sm-title text-bldrsCoveMidBlue mb-2 tracking-wide">Technologies Used</p>
		<table class="table-auto technologies-table w-full">
			<tbody>
				{#each rows as row}
					{#if row === 0}
						<tr>
							{#each techStack.slice(0, 3) as technology, index}
								<td>
									<p
										class="caption text-xs ml-2 text-bldrsCoveDeepBlue dark:text-ashenMidContrast-dark"
									>
										{technology}
									</p>
								</td>
							{/each}
						</tr>
					{:else}
						<tr>
							{#each techStack.slice(3, 6) as technology, index}
								<td>
									<p
										class="caption text-xs ml-2 text-bldrsCoveDeepBlue dark:text-ashenMidContrast-dark"
									>
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

<style type="text/postcss">
	.technologies-table {
		@apply content-center items-center border-separate rounded-md overflow-hidden mt-2;
	}
	.technologies-table td {
		@apply p-1 bg-[#e2e5eb] dark:bg-[#1a2032];
	}
</style>
