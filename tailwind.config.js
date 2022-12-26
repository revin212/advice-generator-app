/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'primary-cyan': 'hsl(193, 38%, 86%)',
        'primary-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'ark-grayish-blue': 'hsl(217, 19%, 24%)',
        'ark-blue': 'hsl(218, 23%, 16%)',
      },
      fontFamily:{
        'main-font': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}