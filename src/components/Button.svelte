<button
    role="button"
    class={`${className} faic btn if tea`}
    class:btnr={rounded}
    class:pc={primary}
    class:sc={secondary}
    class:disabled
    class:link
    class:icon
    class:fjcc={icon}
    {style}
    class:btno={outlined}
    {disabled}
    use:events
>
    {#if icon}
        <slot name="icon" />
    {/if}
    {#if name}{name}{/if}
</button>

<script>
    import { createEventDispatcher } from 'svelte';
    import { current_component } from 'svelte/internal';
    import { getEventsAction } from './../utils';

    export let name;
    export let primary = false;
    export let secondary = false;
    export let outlined = false;
    export let rounded = false;
    export let disabled = false;
    export let link = false;
    export let icon = true;
    export let style;
    export let className = '';

    const dispatch = createEventDispatcher();
    const events = getEventsAction(current_component);
    function onclick(e) {
        dispatch('change');
    }
</script>

<style>

</style>
