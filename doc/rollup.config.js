import svelte from 'rollup-plugin-svelte';
import { createFilter } from 'rollup-pluginutils';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import marked from 'marked';
import hljs from 'highlight.js';
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH;

const ext = /\.md$/;

function md(options = {}) {
	const filter = createFilter(options.include || ['**/*.md'], options.exclude);
	if (options.marked) {
		marked.setOptions(options.marked);
	}
	return {
		name: 'md',

		transform(md, id) {
			if (!ext.test(id)) return null;
			if (!filter(id)) return null;

			const data = marked(md);
			return {
				code: `export default ${JSON.stringify(data.toString())};`,
				map: { mappings: '' },
			};
		},
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css');
			},
			extensions: ['.svelte','.svg']
		}),

		postcss({
			minimize: true,
			//   modules: true,
		 }),

		md({
			marked: {
				highlight: function(code) {
					return hljs.highlightAuto(code, ['bash', 'html', 'css']).value;
				},
			},
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
