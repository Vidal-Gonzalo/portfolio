const {fontFamily} = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-livvic)', ...fontFamily.sans],
      },
      colors: {
        brown: '#5D4739',
        paper: '#E1DCD1',
      },
      screens: {
        phone: '280px',
      },
      boxShadow: {
        custom:
          '0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 1)',
        shading:
          '0 0 0 4px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1), 0 0 30px rgba(0, 0, 0, 1)',
      },
      backgroundColor: {
        shade: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #141f35 100%)',
      },
      keyframes: {
        move: {
          '0%': {transform: 'rotate(340deg) translateX(0)', opacity: 0.6},
          '70%': {opacity: 0.5},
          '80%': {
            transform: 'rotate(340deg) translateX(-800px)',
            opacity: 0,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
      animation: {
        move: 'move 3s linear infinite',
        move1: 'move 2s linear infinite',
        move2: 'move 2s linear infinite',
        move3: 'move 4s linear infinite',
        move4: 'move 5s linear infinite',
        move5: 'move 6s linear infinite',
        move6: 'move 6s linear infinite',
        move7: 'move 3s linear infinite',
        move8: 'move 2.4s linear infinite',
        move9: 'move 1.75s linear infinite',
        move10: 'move 2.25s linear infinite',
      },
    },
  },
  plugins: [],
}
