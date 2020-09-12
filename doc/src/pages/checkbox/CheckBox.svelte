<script>
    import { CheckBox } from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';
    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';

    let props = {
        checked: false,
        disabled: false,
    };

    function handleCheckbox() {
        checked = tru;
    }
</script>

<PreviewPanelWrapper title="CheckBox">
    <PreviewPanel {code}>
        <div class="f fc">
            <CheckBox id={'test'} class="res" {...props}>
                <span name="child">
                    I agree that <a target="_blank" href="https://svelte.dev" title="Open in new window">Svelte</a> is awesome
                </span>
            </CheckBox>
        </div>
    </PreviewPanel>

    {#if doc}
        <Description>
            {@html doc}
        </Description>
    {/if}

    {#if properties.length !== 0}
        <Properties data={properties} />
    {/if}

    {#if custom.length !== 0}
        <Properties data={custom}>
            <h4 slot="name" class="w3-margin-top">CSS custom properties</h4>
        </Properties>
    {/if}
</PreviewPanelWrapper>

<PropsPanel>
    <CheckBox bind:checked={props.checked} name="check" />
    <CheckBox bind:checked={props.disabled} name="disabled" />
</PropsPanel>
