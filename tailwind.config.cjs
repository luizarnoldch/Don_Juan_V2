/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-rest': {
          100: '#000',
          200: '#363F4D',
        },
        'white-rest': {
          100: '#FFF',
          200: '#F4F4F4',
        },
        'pink-rest': {
          200: '#CCBCBC',
          500: '#A288A6',
        },
        'red-rest': {
          500: '#CC4D4D',
        },
        'greeen-rest': {
          500: '#0F9587',
        },
      },
    },
  },
  plugins: [],
}
