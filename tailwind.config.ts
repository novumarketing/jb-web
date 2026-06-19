import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        royal: "#1e3a8f", "royal-2": "#15296b", "royal-soft": "#eaf0fb",
        gold: "#d6a93b", "gold-soft": "#f6edd7",
        ink: "#1f2937", muted: "#5b6b7e",
        bg: "#ffffff", "bg-2": "#f5f8fd", line: "#e6edf6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: { soft: "0 18px 50px rgba(21,41,107,.14)" },
      borderRadius: { xl2: "16px" },
    },
  },
  plugins: [],
};
export default config;
