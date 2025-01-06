import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "3xl": "1600px",
    },
    colors: {},
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      // display: "Oswald, ui-serif",
      layout: "Cabinet Grotesk Variable, sans-serif",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    borderRadius: {
      none: "0",
      // sm: ".125rem",
      sm: "64px",
      DEFAULT: ".25rem",
      lg: ".5rem",
      xl: '24px',
      full: "9999px",
    },
    opacity: {
      "0": "0",
      "20": "0.2",
      "40": "0.4",
      "60": "0.6",
      "80": "0.8",
      "100": "1",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        masenaWhite: "#ffffff",
        // masenaWhite: "#e76f51",
        masenaBlack: "#000000",
        neutral: {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0a0a0a",
        },
        primary: {
          "50": "#f0f4f8",
          "100": "#d9d2ec",
          "200": "#bcccdc",
          "300": "#9fb3c8",
          "400": "#829ab",
          "500": "#627d98",
          "600": "#486581",
          "700": "#334e68",
          "800": "#243b53",
          "900": "#102a43",
          "950": "#081625",
        },
        // backgroundLight: "var(--primary)",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        black: colors.black,
        white: colors.white,
        green: colors.emerald,
        blue: colors.indigo,
        yellow: colors.yellow,
        red: colors.rose,
        purple: "#3f3cbb",
        blueBlack: "#121063",
        lightBlue: "#3ab7bf",
        pink: "#ff77e9",
        color1: "#565584",
        color2: "#ecebff",
        color3: "#78dcca",
      },
    },
  },
  plugins: [],
} satisfies Config;
