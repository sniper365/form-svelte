<div class="preview-panel w3-light-gray">
    <div class="toolbar w3-bar w3-border-bottom">
        <span class="title w3-bar-item">Example</span>
        <span on:click={() => (codeVisible = !codeVisible)} class="title w3-bar-item w3-right">{'{}'}</span>
    </div>

    {#if codeVisible}
        <div transition:slide class="hljs w3-code">
            {@html code}
        </div>
    {/if}

    <div class="preview w3-panel w3-padding-24">
        <slot />
        <slot name="action" />
    </div>

    <slot name="result" />
</div>

<script>
    import { slide } from 'svelte/transition';
    export let code;
    let codeVisible = false;
</script>

<style>
    .preview {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 1rem 0;
        padding: 8px;
        min-height: 7.25rem;
    }
</style>
