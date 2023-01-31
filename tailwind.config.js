/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  // mode: "jit",
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
}
