<slot name="name">
	<h4>Properties</h4>
</slot>

<div class="properties">
	<table class="w3-table-all">
		<tr class="w3-light-gray">
			<th>Name</th>
			<th>Description</th>
			<th>Default</th>
		</tr>
		{#each data as item}
			<tr class="w3-white">
				<td class="w3-text-red">
					<code>{item.name}</code>
					{#if item.type}
						<small class="w3-text-gray w3-block">{item.type}</small>
					{/if}
				</td>
				<td>
					{@html item.desc}
				</td>
				<td>
					{#if item.def && (item.def[0] === '#' || item.def.indexOf('rgb') === 0)}
						<span style={`display:inline-block;width:11px;height:11px;border:1px solid #bbb;background-color:${item.def}`} />
						{item.def}
					{:else}
						{@html item.def}
					{/if}
				</td>
			</tr>
		{/each}
	</table>
</div>

<script>
	export let data = [];
</script>

<style>
	table {
		font-family: var(--code-font-family);
		font-size: 14px;
	}
	td,
	th {
		vertical-align: middle;
	}
</style>
