<label for="d" class="cbx f grop">
    <input type="checkbox" class="cbh" {id} {style} {checked} {disabled} use:events />
    <span class="cblb f fasc tea" />
    <span class="cbl">{name}</span>
</label>

<script>
    import { createEventDispatcher } from 'svelte';
    import { current_component } from 'svelte/internal';
    import { getEventsAction } from './../utils';

    export let name = 'checkbox';
    export let disabled = false;
    export let checked = false;
    export let id = name;
    export let style;

    const dispatch = createEventDispatcher();
    const events = getEventsAction(current_component);
    function onclick(e) {
        dispatch('change');
    }
</script>
