<label class={`cbx f grop ${className}`} class:disabled {style}>
    <input type="radio" bind:value class="cbh" bind:group {disabled} use:events {...attrs} />
    <span class="cblb rb f fasc tea" />
    <span class="cbl">
        <slot>{name}</slot>
    </span>
</label>

<script>
    import { current_component } from 'svelte/internal';
    import { getEventsAction } from './../utils';

    const events = getEventsAction(current_component);

    export { group, className as class, style, disabled, name };

    let group = false;
    let className = '';
    let style = null;
    // let color = 'primary'; // primary, accent, currentColor, inherit
    let disabled = false;
    let name = null;
    let value = 'on';
    let attrs = {};

    $: {
        const { group, style, name, value, ...other } = $$props;

        !other.disabled && delete other.disabled;
        delete other.class;

        attrs = other;
    }
</script>
