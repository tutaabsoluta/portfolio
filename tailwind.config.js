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
        primary: '#ECB365',
        primaryStrong: '#3323a1',
        secondary: '#577B8D',
        neutral: '#04293A', // bg
        accent: '#041C32', // footer,
        terciary:"#C9E9D2"
      },

      
    },
  },
  plugins: [],
}