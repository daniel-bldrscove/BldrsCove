module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base', 
		'airbnb-typescript/base',
		'prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
	],
		rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-mutable-exports": 0,
    "no-labels": 0,
    "no-restricted-syntax": 0,
  },
	plugins: [
		'svelte3', 
		'@typescript-eslint',
	],
	ignorePatterns: [
		'*.cjs',
		'svelte.config.js',
		'eslintrc.cjs',
		'tailwind.config.cjs',
		'tsconfig.json',
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
