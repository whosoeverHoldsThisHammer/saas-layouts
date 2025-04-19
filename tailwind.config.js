/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-color))",
        primary: "rgb(var(--primary-color))"
      }
    },
  },
  plugins: [],
}

