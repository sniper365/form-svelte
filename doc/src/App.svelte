<div class="f fc hf">
    <Header />
    <div class="f fa oh ac">
        <Asise />
        <div class="f">
            {$url}
            <svelte:component this={$url ? Components[$url] : Components['Introduction']} />
        </div>
    </div>
</div>

<script>
    import './app.css';
    import { onMount } from 'svelte';
    import { url } from './stores';
    import Header from './components/Header.svelte';
    import Asise from './components/Aside.svelte';
    import Components from './pages';
    import { getUrlParam, toCamelCase } from './utils';
    onMount(async () => {
        url.update(u => (getUrlParam('c') ? toCamelCase(getUrlParam('c')) : 'Introduction'));
    });
</script>
