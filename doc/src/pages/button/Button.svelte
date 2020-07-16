<section class="w3-padding">
    <h3>Button</h3>
    <PreviewPanel {code}>
        <div>
            <Button name="Default" border {...props} />
            <!-- <Button name="Primary" primary border round_xxlarge /> -->
            <!-- <Button name="Outline" btnType="outline" /> -->
            <!-- <Button name="Ghost" btnType="ghost" border round /> -->
            <!-- <Button name="Link" btnType="link" /> -->
        </div>
    </PreviewPanel>

    <Description>
        {@html doc}
    </Description>

    <Properties data={properties} />

    <Properties data={custom}>
        <h4 slot="name" class="w3-margin-top">CSS custom properties</h4>
    </Properties>
</section>

<PropsPanel>
    <section class="flex align-items-center w3-margin-bottom">
        <input class="w3-check" id="round" name="round" type="checkbox" bind:checked={props.round} />
        <label for="round">round</label>
    </section>
    <section class="flex align-items-center w3-margin-bottom">
        <input class="w3-check" id="round_large" name="round" type="checkbox" bind:checked={props.round_large} />
        <label for="round_large">round_large</label>
    </section>
    <section class="flex align-items-center w3-margin-bottom">
        <input class="w3-check" id="round_xlarge" name="round" type="checkbox" bind:checked={props.round_xlarge} />
        <label for="round_xlarge">round_xlarge</label>
    </section>
    <section class="flex align-items-center w3-margin-bottom">
        <input class="w3-check" id="round_xxlarge" name="round" type="checkbox" bind:checked={props.round_xxlarge} />
        <label for="round_xxlarge">round_xxlarge</label>
    </section>
</PropsPanel>

<script>
    import { Button } from '@kvraamkey/svelte-ui';
    import { PreviewPanel, Description, Properties, Play as PropsPanel } from './../../components/preview';

    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';
    let counter = 0;

    let props = {
        primary: false,
        round: false,
        roundSmall: false,
        round_large: false,
        round_xlarge: false,
        round_xxlarge: false,
    };

    const increment = e => {
        counter += 1;
    };
</script>
