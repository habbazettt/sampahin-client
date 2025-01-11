/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3D6D95',
        'secondary': '#4D4D4D',
      }
    },
  },
  plugins: [],
}