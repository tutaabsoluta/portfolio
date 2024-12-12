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
        primaryStrong: '#3323a1',
        secondary: '#26437E',
        neutral: '#04293A', // bg 04293A
        accent: '#041C32', // footer,
      },
      
    },
  },
  plugins: [],
}