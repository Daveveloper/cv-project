/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#DC2626',
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
} 