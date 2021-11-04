module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: [
		// purge out css that isn't being used
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	theme: {
		fontFamily: {
			ubuntuSans: ['Ubuntu', 'sans-serif'],
			firaMono: ['fira-mono', 'sans-serif']
		},
		extend: {
			colors: {
				ashenLowContrast: {
					light: '#9CA6B6',
					dark: '#494C59'
				},
				ashenMidContrast: {
					light: '#656870',
					dark: '#A7AEC1'
				},
				ashenHighContrast: {
					light: '#333742',
					dark: '#EDF0F6'
				},
				bldrsCoveDeepBlue: '#090d1a',
				bldrsCoveCoolGray: '#252936',
				bldrsCoveBrightBlue: '#38aaff',
				bldrsCoveMidBlue: '#2f75d6',
				bldrsCovePureBlue: '#1a1a7a',
				bldrsCoveLtBabyBlue: '#d3edff',
				bldrsCoveLtGray: '#cccccc'
			},
			fontSize: {
				'4xl-a': '2.375rem'
			},
			lineHeight: {
				'4xl-a': '2.875rem'
			},
			screens: {
				xs: '425px'
			},
			dropShadow: {
				xlLight: '0 10px 15px rgba(0, 0, 0, 0.06)'
			},
			spacing: {
				106: '30rem',
				120: '40.75rem'
			},
			zIndex: {
				'-10': '-10'
			}
		}
	},
	variants: {},
	plugins: []
};
