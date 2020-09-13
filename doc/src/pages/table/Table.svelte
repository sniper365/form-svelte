<script>
    import { Table } from '@kvraamkey/svelte-ui';
    import { PreviewPanelWrapper, PreviewPanel, Description, Properties, PropsPanel } from './../../components/preview';
    import code from './code.md';
    import doc from './doc.md';
    import properties from './props';
    import custom from './custom';

    const rows = [
        { firstName: 'farm', lastName: 'transportation', age: 1, visits: 5, progress: 21, status: 'single' },
        { firstName: 'professor', lastName: 'calculator', age: 28, visits: 82, progress: 35, status: 'relationship' },
        { firstName: 'tendency', lastName: 'digestion', age: 9, visits: 25, progress: 24, status: 'relationship' },
        { firstName: 'trade', lastName: 'mud', age: 15, visits: 96, progress: 10, status: 'complicated' },
        { firstName: 'name', lastName: 'books', age: 17, visits: 95, progress: 19, status: 'complicated' },
        { firstName: 'laugh', lastName: 'sticks', age: 24, visits: 70, progress: 68, status: 'complicated' },
        { firstName: 'drawer', lastName: 'wheel', age: 14, visits: 23, progress: 48, status: 'complicated' },
        { firstName: 'river', lastName: 'population', age: 27, visits: 18, progress: 28, status: 'relationship' },
        { firstName: 'uncle', lastName: 'jellyfish', age: 1, visits: 62, progress: 93, status: 'complicated' },
        { firstName: 'bathroom', lastName: 'leaf', age: 0, visits: 82, progress: 32, status: 'complicated' },
        { firstName: 'tooth', lastName: 'rail', age: 11, visits: 73, progress: 65, status: 'relationship' },
        { firstName: 'river', lastName: 'accident', age: 13, visits: 70, progress: 65, status: 'complicated' },
        { firstName: 'wire', lastName: 'camp', age: 0, visits: 51, progress: 93, status: 'relationship' },
        { firstName: 'string', lastName: 'street', age: 17, visits: 39, progress: 57, status: 'complicated' },
        { firstName: 'cobweb', lastName: 'salt', age: 21, visits: 1, progress: 58, status: 'single' },
        { firstName: 'rabbits', lastName: 'virus', age: 11, visits: 89, progress: 49, status: 'complicated' },
        { firstName: 'view', lastName: 'lead', age: 22, visits: 43, progress: 18, status: 'relationship' },
        { firstName: 'quarter', lastName: 'jellyfish', age: 26, visits: 77, progress: 57, status: 'relationship' },
        { firstName: 'fog', lastName: 'angle', age: 6, visits: 47, progress: 98, status: 'relationship' },
        { firstName: 'cable', lastName: 'entry', age: 17, visits: 43, progress: 32, status: 'complicated' },
        { firstName: 'stretch', lastName: 'relation', age: 26, visits: 31, progress: 33, status: 'single' },
        { firstName: 'chance', lastName: 'college', age: 17, visits: 8, progress: 25, status: 'relationship' },
        { firstName: 'reason', lastName: 'stomach', age: 1, visits: 31, progress: 59, status: 'single' },
        { firstName: 'knot', lastName: 'burst', age: 7, visits: 29, progress: 15, status: 'complicated' },
        { firstName: 'route', lastName: 'store', age: 15, visits: 21, progress: 14, status: 'relationship' },
        { firstName: 'cell', lastName: 'babies', age: 1, visits: 17, progress: 27, status: 'complicated' },
        { firstName: 'beggar', lastName: 'brother', age: 28, visits: 35, progress: 87, status: 'relationship' },
        { firstName: 'distribution', lastName: 'chocolate', age: 0, visits: 81, progress: 28, status: 'complicated' },
        { firstName: 'plate', lastName: 'fall', age: 11, visits: 69, progress: 52, status: 'single' },
        { firstName: 'alcohol', lastName: 'rate', age: 11, visits: 71, progress: 6, status: 'complicated' },
    ];
    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstName',
            sortable: true,
        },
        {
            Header: 'Last Name',
            accessor: 'lastName',
            sortable: true,
        },
        {
            Header: 'Age',
            accessor: 'age',
            sortable: true,
        },
        {
            Header: 'Visits',
            accessor: 'visits',
            sortable: true,
        },
        {
            Header: 'Status',
            accessor: 'status',
            formatter: (v) => {
                return `<i style="color:#f00;">${v.status}</i>`;
            },
        },
        {
            Header: 'Profile Progress',
            accessor: 'progress',
            sortable: true,
        },
    ];
</script>

<PreviewPanelWrapper title="Table">
    <PreviewPanel {code}>
        <Table {rows} {columns} />
        <div class="f wf fjcc" style="margin-top: 20px" />
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
