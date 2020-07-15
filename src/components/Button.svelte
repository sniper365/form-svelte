<button on:click={onclick} use:events class="w3-button">{name}</button>

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
