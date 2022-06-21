/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:'Roboto,sans-serif',
      },
      colors: {
        green: {
          300: "#80037E",
          500: "#80875F",
          700: "#815F43"
        },
        blue: {
          500:"#81D8F7"
        },
        orange: {
          500:"#FBA94C"
        },
        red: {
          500:"#F75A68"
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900:"#09090A",
        }
      }
    },
  },
  plugins: [],
}
