/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8a60ff",
          dark: "#3f0086",
          DEFAULT: "#7c6bfd",
        },

        background: {
          light: "#2c2c2c",
          dark: "#141414",
          DEFAULT: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
