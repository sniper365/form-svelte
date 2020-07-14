<Header />
<section class="content w3-text-black">
	<Asise />
	<div class="w3-container w3-padding main">
		<Button />
	</div>
</section>

<script>
	import Header from './components/Header.svelte';
	import Asise from './components/Aside.svelte';
	import Button from './pages/button';
	import { pkgName } from '@kvraamkey/svelte-ui';
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
