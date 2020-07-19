<div class="am f fc h-full oy">
    {#each Object.keys(components) as component}
        <button on:click={navigation} data-url={component} class="aml f">{component}</button>
    {/each}
</div>

<script>
    import { url } from './../stores.js';
    import { toCamelCase } from './../utils';
    import components from './../pages';

    function navigation(e) {
        let comp = e.target.dataset.url;
        window.history.replaceState(null, null, `?c=${comp}`);
        url.update(u => toCamelCase(comp));
    }
</script>
