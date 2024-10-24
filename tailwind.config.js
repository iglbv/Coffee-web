// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#282C34',
        'secondary': '#F5F5F5',
        'accent': '#FFC107',
        'text': '#212121',
        'light-text': '#FFFFFF',
        'green': '#4CAF50',
        'red': '#F44336',
      },
    },
  },
  plugins: [],
} 