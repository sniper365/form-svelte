<slot name="name">
    <h4>Properties</h4>
</slot>

<div class="properties">
    <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
        {#each data as item}
            <tr>
                <td>
                    <code>{item.name}</code>
                    {#if item.type}
                        <small>{item.type}</small>
                    {/if}
                </td>
                <td>
                    {@html item.desc}
                </td>
                <td>
                    {#if item.def && (item.def[0] === '#' || item.def.indexOf('rgb') === 0)}
                        <span style={`display:inline-block;width:10px;height:10px;background-color:${item.def}`} />
                        {item.def}
                    {:else}
                        <strong>
                            {@html item.def}
                        </strong>
                    {/if}
                </td>
            </tr>
        {/each}
    </table>
</div>
<br />

<script>
    export let data = [];
</script>

<style>
    table {
        width: 100%;
        font-family: Consolas, monospace;
        letter-spacing: 0.01em;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 13.5px;
        line-height: 18px;
    }
    tr:first-child {
        background: var(--color-default);
        font-weight: 500;
    }
    tr:first-child th:nth-child(2) {
        max-width: 80%;
    }
    th,
    td {
        padding: 5px 10px;
        border: 1px solid var(--default);
        text-align: left;
        vertical-align: middle;
    }
    td :global(code),
    code {
        color: var(--color-secondary);
    }
    small {
        display: block;
        color: #747681;
        text-transform: capitalize;
    }
</style>
