import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import css from 'rollup-plugin-css-porter';

const pkg = require('./package.json');

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, format: 'es' },
		{ file: pkg.main, format: 'umd', name},
	],
	plugins: [
		svelte(),
		resolve(),
		terser(),
		css({
			raw: false,
			minified: 'dist/globalStyle.min.css',
		})
	]
};
