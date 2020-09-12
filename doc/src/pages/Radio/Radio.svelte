<script>
    import { Radio, CheckBox } from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';
    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';

    let colors = {
        Default: '#f50057',
        Primary: '#43a047',
        Secondary: '#1976d2',
    };
    let group = 'Default';

    let props = {
        disabled: false,
    };
</script>

<PreviewPanelWrapper title="Radio Button">
    <PreviewPanel {code}>
        <div class="f fc">
            {#each Object.keys(colors) as key}
                <Radio {...props} bind:group color={colors[key]} value={key}><span>{key}</span></Radio>
            {/each}
            <!-- <p class="result">
                Value: [
                <code>{group}</code>
                ]
            </p> -->
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
    <CheckBox bind:checked={props.disabled} name="disabled" />
</PropsPanel>
