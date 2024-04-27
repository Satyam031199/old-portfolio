/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'shadow-yellow-500',
    'shadow-sky-400',
    'shadow-orange-500',
    'shadow-green-600',
    'shadow-pink-400',
    'shadow-orange-400',
    'shadow-blue-600',
    'shadow-gray-300',
    'shadow-blue-500'
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};