module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
  theme: {
		extend: {
			fontFamily: {
				filsonPro: ['filson-pro', 'sans-serif'],
				niveauGrotesk: ['niveau-grotesk', 'sans-serif']
			},
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
				bldrsCoveCoolSlate: '#141928',
				bldrsCoveCoolGray: '#252936',
				bldrsCoveBrightBlue: '#38aaff',
				bldrsCoveMidBlue: '#2f75d6',
				bldrsCovePureBlue: '#093bc7',
				bldrsCoveLtBabyBlue: '#d3edff',
				bldrsCoveLtGray: '#cccccc',
				bldrsCovePaleStone: '#e0eaf0'
			},
			fontSize: {
				'4xl-a': '2.375rem'
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				16: 'repeat(16, minmax(0, 1fr))'
			},
			lineHeight: {
				'4xl-a': '2.875rem'
			},
			screens: {
				xs: '475px',
				ultraWide: '2000px'
			},
			dropShadow: {
				xlLight: '0 10px 15px rgba(0, 0, 0, 0.06)'
			},
			spacing: {
				106: '30rem',
				120: '40.75rem',
				135: '70rem'
			},
			zIndex: {
				'-10': '-10'
			}
		}
	},
}
