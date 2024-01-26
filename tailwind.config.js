/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		
			"./src/**/*.{js,jsx,ts,tsx}",
			"./components/**/*.{html, js, jsx, ts, tsx}",
		],
  theme: {
    extend: {
			backgroundImage: {
				'paper': 'url("library/images/paper.jpg")',
			},
			fontFamily: {
				'dynapuff': ['dynapuff']
			}
		},
  },
  plugins: [],
}

