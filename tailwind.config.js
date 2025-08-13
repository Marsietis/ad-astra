/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'walsheim': ['GT Walsheim Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}