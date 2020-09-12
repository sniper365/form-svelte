<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let columns;
    export let rows;
</script>

<style>
</style>

<table class="table">
    <thead>
        <slot name="header">
            <tr>
                {#each columns as col}
                    <th>{col.Header}</th>
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
