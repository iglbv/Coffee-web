/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coffee': '#5C3825',
        'latte': '#8F6331',
        'dust': '#C7AA92',
      },
    },
  },
  plugins: [],
}


