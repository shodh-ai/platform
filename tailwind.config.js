/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		// Color names generated at: https://color-name-generator.com
		colors: {
			sugarMint: '#C3E3C5',
			astronaut: '#435173',
			trafficWhite: '#F1EFEA',
			whippedCream: '#F2EFE7',
			unbleached: '#FBF9F4',
			white: '#FFFFFF',
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-plus-jakarta-sans)'],
			},
		},
	},
	plugins: [],
};

export default config;
