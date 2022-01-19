<script lang="ts">
	export let href: string = '';
	export let rel: string = 'external';
	export let classes: string = 'ml-4 md:ml-6 lg:ml-10';
</script>

<li class="{classes}">
	<h6>
		<a href="{href}" rel="{rel}" class="nav-item slide-left-right dark:text-edlLtGray">
			<slot />
		</a>
	</h6>
</li>
