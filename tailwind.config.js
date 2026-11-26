/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        portalGround: "#0A0C0E",
        portalGround2: "#101317",
        portalInk: "#EDE7DC",
        portalInk2: "#9EA5A8",
        portalMuted: "#6C7378",
        portalAmber: "#E8913C",
        portalTeal: "#2E6B72",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
