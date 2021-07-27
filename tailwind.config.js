const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: colors.yellow,
       
        gray: colors.gray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
