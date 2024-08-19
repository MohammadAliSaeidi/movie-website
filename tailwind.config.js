/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "var(--color-primary)",
					hover: "var(--color-primary--hover)",
				},
				secondary: "var(--color-secondary)",
				label: {
					primary: "var(--color-label-primary)",
					secondary: "var(--color-label-secondary)",
					tertiary: "var(--color-label-tertiary)",
					quaternary: "var(--color-label-quaternary)",
					light: "var(--color-label-light)",
					dark: "var(--color-label-dark)",
				},
				material: {
					primary: {
						DEFAULT: "var(--color-material-primary)",
						hover: "var(--color-material-primary--hover)",
					},
				},
				borderColor: {
					primary: "var(--color-border-primary)",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			borderRadius: {
				rounded: "var(--border-radius)",
			},
		},
	},
	plugins: [],
};
