<div class="w3-sidebar w3-bar-block w3-border-right">
	<button on:click={navigation} data-url="button" class="w3-bar-item w3-button">Button</button>
	<button on:click={navigation} data-url="alert" class="w3-bar-item w3-button">Link 2</button>
	<button on:click={navigation} data-url="accordian" class="w3-bar-item w3-button">
		Link 3
	</button>
</div>

<script>
	function navigation(e) {
		let comp = e.target.dataset.url;
		window.history.replaceState(null, null, `?c=${comp}`);
	}
</script>

<style>
	.w3-sidebar {
		width: 100%;
		flex: 0 0 200px;
		max-width: 200px;
		position: inherit !important;
		padding: 16px 0;
	}
</style>
