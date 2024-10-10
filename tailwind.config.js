/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coffee': '#8C735B',
        'latte': '#F5E7D8',
        'dust': '#FDF5E6',
        'gold': '#C78F2D'
      },
    },
  },
  plugins: [],
}


