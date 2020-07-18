<div class="am f fc h-full oy">
    <button on:click={navigation} data-url="introduction" class="aml f">Introduction</button>
    <button on:click={navigation} data-url="button" class="aml f">Button</button>
</div>

<script>
    import { url } from './../stores.js';
    import { toCamelCase } from './../utils';
    function navigation(e) {
        let comp = e.target.dataset.url;
        window.history.replaceState(null, null, `?c=${comp}`);
        url.update(u => toCamelCase(comp));
    }
</script>
