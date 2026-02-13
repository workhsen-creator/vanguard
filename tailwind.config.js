/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#262626', // Updated Black
        black: '#262626', // Override default black
        primary: '#ee7e4b', // Soft Orange
        secondary: '#F5E6D3', // Light Skin
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'], // Can swap for something bolder if needed
      },
    },
  },
  plugins: [],
}
