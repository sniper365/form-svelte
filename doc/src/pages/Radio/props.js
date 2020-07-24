export default [
    {
        name: 'checked',
        desc: 'Get/Set checked state',
        type: 'boolean',
        def: 'false',
    },
    {
        name: 'class',
        desc: 'Custom global CSS class name',
        type: 'string',
        def: "''",
    },
    {
        name: 'color',
        desc: "Color of the check box element, additionally, 'primary' and 'secondary' values are possible",
        type: 'string',
        def: 'default',
    },
    {
        name: 'value',
        desc: 'The value that will be submitted for the checkbox when it is checked',
        type: '[boolean, number, string]',
        def: 'on',
    },
];
