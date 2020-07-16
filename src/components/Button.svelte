<button
    role="button"
    class="w3-btn w3-border easeall"
    class:w3-white={!primary}
    class:w3-blue={primary}
    class:w3-border-blue={primary}
    class:w3-round={round}
    class:w3-round-small={roundSmall}
    class:w3-round-large={round_large}
    class:w3-round-xlarge={round_xlarge}
    class:w3-round-xxlarge={round_xxlarge}
    on:click={onclick}
    use:events
>
    {name}
</button>

<script>
    import { createEventDispatcher } from 'svelte';
    import { current_component } from 'svelte/internal';
    import { getEventsAction } from './../utils';

    export let name = 'Label';
    export let primary = false;
    export let round = false;
    export let roundSmall = false;
    export let round_large = false;
    export let round_xlarge = false;
    export let round_xxlarge = false;
    const dispatch = createEventDispatcher();
    const events = getEventsAction(current_component);
    function onclick(e) {
        dispatch('change');
    }
</script>

<style>
    button {
    }
</style>
