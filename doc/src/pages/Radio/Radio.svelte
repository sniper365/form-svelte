<PreviewPanelWrapper title="Avatar">
    <PreviewPanel {code}>
        <div class="f fc">
            <label class="cbx f grop">
                <input type="checkbox" class="cbh" value="on" />
                <span class="cblb rb f fasc tea" />
                <span class="cbl">check</span>
            </label>
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

<PropsPanel />

<script>
    import {} from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';
    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';

    let props = {
        checked: false,
        disabled: false,
    };
</script>

<style>
    .rb {
        border-radius: 50%;
    }
    .cbh:checked + .rb {
        background: transparent;
    }
    .cbh:checked + .rb:after {
        top: 2px;
        left: 2px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 5px solid var(--default);
    }
</style>
