<Header />
<section class="content flex h-screen w3-text-black">
	<Asise />
	<div class="w3-container w3-padding main">
		<h2>{$url}</h2>
		<svelte:component this={$url ? Components[$url] : Components['Introduction']} />
	</div>
</section>

<script>
	import './app.css';
	import { onMount } from 'svelte';
	import { url } from './stores';
	import Header from './components/Header.svelte';
	import Asise from './components/Aside.svelte';
	import Components from './pages';
	import { getUrlParam, toCamelCase } from './utils';
	onMount(async () => {
		url.update((u) => (getUrlParam('c') ? toCamelCase(getUrlParam('c')) : 'Introduction'));
	});
</script>

<style>
	:root {
		--font-family: 'Fira Mono', monospace;
	}

	:global(html, body) {
		overflow: hidden;
		background: #fbfbfb;
		color: #3f403f;
		font-size: 16px;
		font-weight: 400;
		font-family: var(--font-family);
	}

	.w3-container {
		overflow: auto;
	}
</style>
