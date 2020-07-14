<Header />
<section class="content w3-text-black">
	<Asise />
	<div class="w3-container w3-padding main">
		<h2>{$url}</h2>
		<svelte:component this={$url ? Components[$url] : Components['Introduction']} />
	</div>
</section>

<script>
	import { onMount } from 'svelte';
	import { url } from './stores';
	import Header from './components/Header.svelte';
	import Asise from './components/Aside.svelte';
	import Components from './pages';
	import { getUrl, toCamelCase } from './utils';
	// import { pkgName } from '@kvraamkey/svelte-ui';

	onMount(async () => {
		url.update((u) => (getUrl() ? toCamelCase(getUrl()) : 'Introduction'));
	});
</script>

<style>
	.content {
		display: flex;
		padding: 0;
		font-size: 100%;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100vh;
	}
	.main {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		padding-bottom: 60px !important;
	}
</style>
