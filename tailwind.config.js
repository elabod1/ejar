/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        kufi: ['Noto Kufi Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

