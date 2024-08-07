/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '0px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1400px'},

      'lg': {'min': '1401px', 'max': '2879px'},

    },
  },
  plugins: [],
}