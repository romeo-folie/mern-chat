const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'cyan': '#F3F6FB',
      'transparent': 'transparent',
      'teal': '#02A288',
      'white': colors.white,
      'red': colors.red,
      'green': colors.green,
    }),
    colors: {
      'dark-blue': '#1B223C',
      'teal': '#02A288',
      'ash': '#B0C9D1',
      'cyan': '#F3F6FB',
      'white': colors.white,
      'red': colors.red,
      'green': colors.green,
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {
      fontFamily: {
        'sans': ['poppins', 'poppins-semibold', 'poppins-medium', 'ui-sans-serif','Helvetica', 'system-ui'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
