<script lang="ts">
	export let tblClass: string = '';
	export let tblTdClass: string = '';
	export let showCols: boolean = false;
	export let tableData: any[] = [];
</script>

<table class="{tblClass}">
	{#if showCols}
		<thead>
			<tr>
				{#each Object.keys(tableData[0]) as columnHeading}
					<th>
						<p
							class="text-sm font-bold uppercase text-ashenHighContrast-light dark:text-ashenMidContrast-dark"
						>
							{columnHeading}
						</p>
					</th>
				{/each}
			</tr><tr></tr>
		</thead>
	{/if}
	<tbody>
		{#each Object.values(tableData) as row}
			<tr>
				{#each Object.values(row) as cell}
					<td class="{`p-1 ${tblTdClass}`}">
						<p class="text-xs ml-2 text-ashenHighContrast-light dark:text-ashenMidContrast-dark">
							{cell}
						</p></td
					>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
