module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
      colors: {
        brand: {
          primary: "#5C62EC",
          hover: "#3C40AE",
          accent: "#85BFD1",
          grey: "#A0A0A1",
          white: "#FFFFFF",
          fullfil: "#1C1E22",
          border: "#26292D",
          background: "#171718",
        },
      },
      fontFamily: {
        DMSans: ["DM Sans", "DM-Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        md: "5px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
