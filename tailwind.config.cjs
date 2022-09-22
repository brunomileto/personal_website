/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Space Mono", "mono", "serif"],
    },
    extend: {
      colors: {
        accent: "#4CF2FB",
        accentLight: "#97DAC9",
        background: "#20252E",
        backgroundBlue: "#0a192f",
        backgroundLight: "#21262F",
        backgroundHambMenu: "#272E39",
        text: "#ADA9A3",
        title: "#CFDCEC",
        subTitle: "#B8B4AC",
        subTitleLight: "#CFDCEC",
      },
    },
  },
  plugins: [],
};
