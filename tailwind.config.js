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
        primary: '#b3b3ff', //b3b3ff
        secondary: '#1F371C', // midnight blue #272757
        terciary: '#CBD5E1', //d3d3ff lavender
        neutral: '#021526', // bg 021526
        accent: '#041C32', // footer,
        optional: '#F3A683'
        
      },
        boxShadow: {
        lg: "0 4px 8px rgba(179, 179, 255, 0.3)", 
      },
    },
  },
  plugins: [],
}