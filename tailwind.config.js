export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#A5FFB3',
        secondary: '#0b1720',
        terciary: '#CBD5E1',
        neutral: '#0F1C24',
        accent: '#041C32',
        optional: '#f0acac'
      },
      boxShadow: {
        lg: "0 4px 8px rgba(179, 179, 255, 0.3)",
      },
    },
  },
  plugins: [],
}
