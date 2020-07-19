<div
    role="button"
    class="f faic fjcc ao oh avatar"
    class:pc={color === 'primary'}
    class:sc={color === 'secondary'}
    class:small={size === 'small'}
    class:large={size === 'large'}
    {style}
>
    {#if src && isImgLoaded}
        <img {alt} {src} class="ao" />
    {/if}
    {#if src && alt && !isImgLoaded}{toShortName(alt)}{/if}
    {#if !src && alt}{alt}{/if}

    <slot name="icon" />
</div>

<script>
    import { onMount } from 'svelte';
    export let src;
    export let alt;
    export let style;
    export let color;
    export let size;
    let isImgLoaded = false;

    function toShortName(name) {
        if (name) {
            return name
                .match(/\b(\w)/g)
                .join('')
                .substring(0, 2)
                .toUpperCase();
        }
    }

    function testImage(URL) {
        var tester = new Image();
        tester.onload = () => (isImgLoaded = true);
        tester.onerror = () => (isImgLoaded = false);
        tester.src = URL;
    }

    onMount(async () => {
        if (src) {
            testImage(src);
        }
    });
</script>
