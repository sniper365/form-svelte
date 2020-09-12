<script>
    import { slide } from 'svelte/transition';
    export let code;
    let codeVisible = false;
</script>

<style>
    .preview {
        margin: 1rem 0;
        padding: 8px;
        min-height: 7.25rem;
    }
</style>

<div class="pp f fc">
    <div class="pph f faic">
        <span class="f1">Example</span>
        <span on:click={() => (codeVisible = !codeVisible)} class="cp">{'{ }'}</span>
    </div>

    {#if codeVisible}
        <div transition:slide class="hljs ox">
            {@html code}
        </div>
    {/if}

    <div class="preview f faic fjcc fw w3-panel w3-padding-24">
        <slot />
        <slot name="action" />
    </div>

    <slot name="result" />
</div>
