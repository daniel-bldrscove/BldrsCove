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
				edlDeepBlue: '#0b0d14',
				edlCoolSlate: '#191d26',
				edlCoolGray: '#2a2e3a',
				edlBrightBlue: '#38aaff',
				edlMidBlue: '#2f75d6',
				edlLtBabyBlue: '#d3edff',
				edlLtGray: '#cccccc',
				edlPaleStone: '#e0eaf0',
				edlOrange: '#ff5e38',
				edlYellow: '#feb91b',
				edlTealLight: '#0dc3b3',
				edlTealDark: '#12797e',
			},
			fontSize: {
				'4xl-a': '2.375rem',
				'4xl-b': '3.675rem'
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				16: 'repeat(16, minmax(0, 1fr))'
			},
			lineHeight: {
				'4xl-a': '2.875rem'
			},
			screens: {
				xs: '30rem', //475px
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
