/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Deep Black
        primary: '#FF4500', // Vibrant Orange
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
