<Description>
	<Submarkup />
</Description>

<Properties data={properties} />

<Properties data={custom}>
	<h4 slot="name" class="w3-margin-top">CSS custom properties</h4>
</Properties>

<script>
	import { Description, Properties } from './../../components/demo';

	import code from './code.md';
	import Submarkup from './doc.md';
	import properties from './props';
	import custom from './custom';
</script>
