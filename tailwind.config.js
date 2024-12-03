/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: [ 'Roboto Slab', 'serif' ],
      colors: {
        primary: '#FDC435',
        // primary: '#9ABF80',
        secondary: '#6A669D',
        neutral: '#E5E3D4',
        accent: '#1C325B',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}