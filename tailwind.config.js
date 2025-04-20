/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "rgb(var(--bg-color))",
        primary: "rgb(var(--primary-color))",
        surface: "rgb(var(--surface-color))",
        surfacevariant: "rgb(var(--surface-variant-color))",
        container: "rgb(var(--surface-container-color))"
      }
    },
  },
  plugins: [],
}

