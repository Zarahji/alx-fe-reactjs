module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Optional: 'media', 'class', or false
  theme: {
    extend: {},
  },
  plugins: [],
};
darkMode: 'class'// Enables dark mode via a class
const { Config } = require("tailwindcss");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'media', // or 'class', or false
  theme: {
    extend: {},
  },
  plugins: [],
};