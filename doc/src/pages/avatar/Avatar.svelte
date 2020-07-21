<PreviewPanelWrapper title="Avatar">
    <PreviewPanel {code}>
        <div class="f wf fjcc" style="margin-top:20px">
            <Avatar alt="Ramki A" src={imgUrl} {...props} />
            <Avatar {...props}>
                <svg slot="icon" class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2
                        2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2
                        14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                    />
                </svg>
            </Avatar>
            <Avatar alt="KV" color={'primary'} {...props} />
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

    <legend>Color</legend>

    {#each colors as color}
        <label>
            <input type="radio" data-prop="color" bind:group={props.color} value={color} />
            {color}
        </label>
    {/each}

    <legend>Size</legend>

    {#each sizes as size}
        <label>
            <input type="radio" data-prop="size" bind:group={props.size} value={size} />
            {size}
        </label>
    {/each}

</PropsPanel>

<script>
    import { Avatar } from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';
    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';

    const imgUrl = 'https://github.githubassets.com/images/icons/emoji/octocat.png';
    let props = {
        color: 'default',
        size: 'medium',
    };
    const colors = ['default', 'primary', 'secondary'];
    const sizes = ['small', 'medium', 'large'];
</script>

<style>
    label {
        margin-right: 6px;
        text-transform: capitalize;
    }
</style>
