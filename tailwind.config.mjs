import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				generalSans: ['GeneralSans', 'sans-serif'],
				futuraMedium: ['FuturaMedium', 'sans-serif'],
			},
		},
		screens: {
			'sm': '640px',
	
			  'md': '768px',
	
			  'lg': '1024px',
	
			'lg2': '1150px',
	
			  'xl': '1280px',
	
			  '2xl': '1536px',
		},
	},
	plugins: [],
}
