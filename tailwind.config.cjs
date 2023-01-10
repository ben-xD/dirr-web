const DaisyUI = require("daisyui");
const cssnano = require('cssnano');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      PatrickHand: ['Patrick Hand']
    },
    colors: {
      purple: {
        50: "#f5f3ff",
        100: "#ccc4f1",
        200: "#b2a7eb",
        300: "#998ae4",
        400: "#8c7be1",
        500: "#806dde",
        600: "#7362c7",
        700: "#6657b1",
        800: "#594c9b",
        900: "#291A74"
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
    extend: {},
  },
  plugins: [DaisyUI, cssnano()],
  daisyui: {}
}
