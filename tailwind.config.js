/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			backgroundImage: {
				"hero-pettern": "url('/public/hero-pattern.svg')",
			},
			backgroundColor: {
				"yellow-gradient": "linear-gradient(90deg, #feac6d 0%, #ae61ed 100%)",
			},
			boxShadow: {
				"blueButtonShadow": "0 3px 23px #2d5981",
				"gradientButtonShadow": "0 3px 23px rgba(255, 255, 255, 0.2)"
			},
			padding: {
				34: "padding: 0 8.44rem",
			},
			colors: {
				"primary-white": "#FFFBFB",
				"primary-blue": "#1DAEFF",
				"primary-gray": "#FFFFFFCC",
				"primary-text-dark-gray": "#FFFBFBA6",
				"primary-red": "#DD5E5E",
				"primary-dark-gray": "#161616",
			},
			keyframes: {
				"open-modal": {
					"0%": {
						transform: "scale(0)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
			},
			animation: {
				"open-modal": "open-modal .4s ease-in-out forwards",
				"close-modal": "open-modal .4s reverse ease-in-out forwards",
			}
		},
	},
	plugins: [],
};
