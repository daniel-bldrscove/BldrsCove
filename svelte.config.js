import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import vercel from '@sveltejs/adapter-vercel';
/*This will add autocompletion when working with svelteKit */
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {
				plugins: [tailwind, autoprefixer]
			}
		})
	],

	kit: {
		adapter: vercel(),
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/components/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {}
	}
};

export default config;
