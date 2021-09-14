const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ['"Futura PT Web Cond Bold"', "sans-serif"],
      },
      colors: {
        primary: colors.black,
        grayBg: "#F4F4F4",
        grayBorder: "#8F8E8E",
        grayText: "#AAAAAA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
