const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
    },
  },
  plugins: [],
}
