<button role="button" class="w3-button w3-white w3-border" on:click={onclick} use:events>{name}</button>

<script>
	import { createEventDispatcher } from 'svelte';
	import { current_component } from 'svelte/internal';
	import { getEventsAction } from './../utils';

	export let name = 'Label';

	const dispatch = createEventDispatcher();
	const events = getEventsAction(current_component);
	function onclick(e) {
		dispatch('change');
	}
</script>

<style>

</style>
