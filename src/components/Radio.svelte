<script>
    import { current_component } from 'svelte/internal';
    import { getEventsAction } from './../utils';

    const events = getEventsAction(current_component);
    export let group = true;
    export let className = '';
    export let style = null;
    // export let color = 'primary'; primary, accent, currentColor, inherit
    export let disabled = false;
    export let name = null;
    export let value;
    export let title = name;
</script>

<label class={`cbx f grop ${className}`} class:disabled {style} {title}>
    <input type="radio" class="cbh" bind:group {value} {disabled} use:events />
    <span class="cblb rb f fasc tea" />
    <span class="cbl">
        <slot>{name}</slot>
    </span>
</label>
