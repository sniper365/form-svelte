<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let columns;
    export let rows;
    // export let sortBy = "";
    // export let sortOrder = 1;
    export let iconAsc = '▲';
    export let iconDesc = '▼';

    let sortBy = { col: 'id', ascending: true };

    $: sort = (column) => {
        if (sortBy.col == column) sortBy.ascending = !sortBy.ascending;
        else {
            sortBy.col = column;
            sortBy.ascending = true;
        }

        // Modifier to sorting function for ascending or descending
        let sortModifier = sortBy.ascending ? 1 : -1;
        let sort = (a, b) => (a[column] < b[column] ? -1 * sortModifier : a[column] > b[column] ? 1 * sortModifier : 0);
        rows = rows.sort(sort);
    };

    // const updateSortOrder = (colKey) => {
    //     if (colKey === sortBy)  sortOrder = sortOrder === 1 ? -1 : 1
    //     else  sortOrder = 1;
    // }

    // const handleClickCol = (event, col) => {
    //     updateSortOrder(col.accessor)
    //     sortBy = col.accessor;
    //     dispatch('clickCol', {event, col, key:col.accessor} );
    // }
</script>

<style>
    .sortable {
        cursor: pointer;
    }
</style>

<table class="table">
    <thead>
        <slot name="header" {sortOrder} {sortBy}>
            <tr>
                {#each columns as col}
                    <th on:click={sort(col.accessor)} class:sortable={col.sortable}>
                        {col.Header}
                        {#if col.sortable && sortBy.col === col.accessor}
                            <span>{@html sortBy.ascending ? iconAsc : iconDesc}</span>
                        {/if}
                    </th>
                {/each}
            </tr>
        </slot>
    </thead>
    <tbody>
        {#each rows as row, n}
            <slot name="row" {row} {n}>
                <tr>
                    {#each columns as col}
                        <td>
                            {@html col.formatter ? col.formatter(row) : row[col.accessor]}
                        </td>
                    {/each}
                </tr>
            </slot>
        {/each}
    </tbody>
</table>
