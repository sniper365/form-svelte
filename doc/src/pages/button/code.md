```javascript
<Button name="Click Me" on:click={increment} />

<script>
	import { Button } from '@kvraamkey/svelte-ui';

	let counter = 0;

	function increment() {
		counter += 1;
	}
</script>
```