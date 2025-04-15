module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkbg: "#181818",
        secondarydarkbg: "#1E1E1E",
        darkmodetext: "#E4E4E4F2",
        cta: "#9b0ced",
        hovercta: "#7123b0",
        darkmodeCTA: "#b458ff",
        black: "#000000",
        white: "#ffffff",
        heading: "#1e1e1f",
        grey: "#f5f5f5",
        error: "#f23f3f",
      },
      fontFamily: {
        inter: ["Inter", "system-ui"],
        dmSans: ["DM Sans", "system-ui"],
      },
    },
  },
  plugins: [],
};
