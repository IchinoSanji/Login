/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      width: {
        '420': '420px',
      },
      colors: {
        'cinzinha': '#515151', 
        'bordar' : 'rgba(255, 255, 255, 0.2)'
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
    ],
}

