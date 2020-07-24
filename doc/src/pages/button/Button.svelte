<PreviewPanelWrapper title="Button">
    <PreviewPanel {code}>
        <Button on:click={increment} name="Default" {...props} />
        <Button on:click={increment} name="Primary" {...props} color="primary" />
        <Button on:click={increment} name="Secondary" {...props} color="secondary" />
        <Button on:click={increment} name="Disabled" {...props} color="secondary" disabled />
        <Button on:click={increment} name="Link" {...props} link primary />

        <!-- <Button className="custom" on:click={increment} name="Custom CSS" {...props} /> -->

        <Button icon {...props}>
            <svg slot="icon" class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53
                    4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03
                    9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                />
            </svg>
        </Button>
        <span class="f faic fjcc wf">Clicked counter: [ {counter} ]</span>
    </PreviewPanel>

    <Description>
        {@html doc}
    </Description>

    <Properties data={properties} />

    <Properties data={custom}>
        <h4 slot="name" class="w3-margin-top">CSS custom properties</h4>
    </Properties>
</PreviewPanelWrapper>

<PropsPanel>
    <section class="flex align-items-center w3-margin-bottom">
        <input class="w3-check" id="rounded" name="rounded" type="checkbox" bind:checked={props.rounded} />
        <label for="rounded">rounded</label>
    </section>
    <section class="flex align-items-center w3-margin-bottom">
        <input class="w3-check" id="outlined" name="round" type="checkbox" bind:checked={props.outlined} />
        <label for="outlined">outlined</label>
    </section>
</PropsPanel>

<script>
    import { Button } from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';

    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';
    let counter = 0;

    let props = {
        rounded: false,
        outlined: false,
    };

    const increment = e => {
        counter += 1;
    };
</script>

<style>
    :global(.custom) {
        --btn-text-color: #fff;
        --btn-text-hcolor: var(--btn-text-color);
        --btn-bg-color: #9c27b0;
        --btn-bg-hcolor: #7b1fa2;
    }
</style>
