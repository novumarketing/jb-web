import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#1E3A8F", d: "#15296B", dd: "#102050", 50: "#EAF0FB", 100: "#D4E0F6" },
        green: { DEFAULT: "#C8941F", d: "#A7791A", dd: "#7E5A12", 50: "#F8EFD7", 100: "#EFDCA9" },
        ink: { DEFAULT: "#14213D", 800: "#1B2C52", 700: "#2B3A57", 600: "#44506B", 500: "#6A7790", 300: "#AAB6C8" },
        bd: "#DCE4F1",
        bd2: "#E7EDF7",
        bg: "#F7F9FD",
        bg2: "#EDF2FB",
        surface: "#FFFFFF",
        gold: "#D6A93B",
        wa: "#1FA855",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
