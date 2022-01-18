import sveltePreprocessor from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';


/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocessor({
			postcss: {
				plugins: [tailwindcss, autoprefixer]
			}
		})
	],

	kit: {
		adapter: vercel(),
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		vite: {},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
