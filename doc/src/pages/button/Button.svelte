<PreviewPanel {code}>

	<div>
		<Button name="Default" />
		<Button name="Primary" btnType="primary" />
		<Button name="Outline" btnType="outline" />
		<Button name="Ghost" btnType="ghost" />
		<Button name="Link" btnType="link" />
	</div>

</PreviewPanel>

<Description>
	{@html doc}
</Description>

<Properties data={properties} />

<Properties data={custom}>
	<h4 slot="name" class="w3-margin-top">CSS custom properties</h4>
</Properties>

<script>
	import { Button } from '@kvraamkey/svelte-ui';
	import { PreviewPanel, Description, Properties } from './../../components/preview';

	import code from './code.md';
	import doc from './doc.md';
	import properties from './props';
	import custom from './custom';
	let counter = 0;

	const increment = (e) => {
		counter += 1;
	};
</script>
