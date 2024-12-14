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
        primary: '#BAF99D',
        secondary: '#1F371C',
        terciary: '#CBD5E1',
        neutral: '#021526', // bg 04293A
        accent: '#041C32', // footer,
      },
      
    },
  },
  plugins: [],
}