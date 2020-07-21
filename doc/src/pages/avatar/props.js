export default [
    {
        name: 'color',
        desc: "Color of the Avatar background, additionally, 'default,'primary' and 'secondary' values are possible",
        type: 'enum',
        def: 'default',
    },
    {
        name: 'size',
        desc: "Size of the Avatar, additionally, 'small,'medium' and 'large' values are possible",
        type: 'enum',
        def: 'medium',
    },
    {
        name: 'icon',
        desc: 'Defines Icon component can be used in slot (slot-name:icon)',
        type: 'slot',
        def: 'false',
    },
    {
        name: 'class',
        desc: 'Custom global CSS class name',
        type: 'string',
        def: "''",
    },
    {
        name: 'style',
        desc: '',
        type: 'string',
        def: '',
    },
];
