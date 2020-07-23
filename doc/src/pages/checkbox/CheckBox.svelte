<PreviewPanelWrapper title="Avatar">
    <PreviewPanel {code}>
        <div class="f fc" style="margin-top:20px">
            <CheckBox name="Default" />
            <CheckBox name="checked" checked />
            <CheckBox name="disabled" disabled />
            <CheckBox name="Checked & Disabled" disabled checked />
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
    <!-- props sample code -->
</PropsPanel>

<script>
    import { CheckBox } from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';
    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';

    let isChecked = false;

    function handleCheckbox() {
        isChecked = !isChecked;
        console.log(isChecked);
    }
</script>
