<div class="am f fc h-full oy">
    {#each Object.keys(components) as component}
        <button on:click={navigation} data-url={component} class="aml f">{component}</button>
    {/each}
</div>

<script>
    import { url } from './../stores.js';
    import { toCamelCase } from './../utils';
    import * as components from './../pages';

    console.log(components);

    function navigation(e) {
        let comp = e.target.dataset.url;
        window.history.replaceState(null, null, `?c=${comp}`);
        url.update(u => toCamelCase(comp));
    }
</script>
