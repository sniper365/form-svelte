<DemoPanel {code}>
	<Button name="counter: {counter}" on:click={increment} />
</DemoPanel>

<Description>
	{@html doc}
</Description>

<Properties data={properties} />

<Properties data={custom}>
	<h4 slot="name" class="w3-margin-top">CSS custom properties</h4>
</Properties>

<script>
	import { Button } from '@kvraamkey/svelte-ui';
	import { DemoPanel, Description, Properties } from './../../components/demo';

	import code from './code.md';
	import doc from './doc.md';
	import properties from './props';
	import custom from './custom';
	let counter = 0;

	const increment = (e) => {
		counter += 1;
	};
</script>
