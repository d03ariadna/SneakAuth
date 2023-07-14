/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainf: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans],
        outf: ['Londrina Outline', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "330px",
      },
    },
    colors: {
      bluemain: "#1400ff",
      purplemain: "#9a00ff",
      white: "#ffffff",
      orange: "#FF7A00",
      black: "#000000",
      transparent: "transparent",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
