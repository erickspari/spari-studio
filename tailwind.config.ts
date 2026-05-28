import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071B2F",
        "navy-2": "#0A2A4A",
        blue: "#1472FF",
        gold: "#F5B83D",
        orange: "#FF9F1C",
        offwhite: "#F7F9FC",
        muted: "#D7E0EA",
        ink: "#050A10"
      },
      fontFamily: {
        display: ["var(--font-exo)", "Exo 2", "Orbitron", "Montserrat", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "Montserrat", "Arial", "sans-serif"]
      },
      maxWidth: {
        container: "1180px"
      },
      boxShadow: {
        card: "0 18px 45px rgba(0,0,0,.18)",
        cardLight: "0 14px 34px rgba(7,27,47,.08)"
      },
      backgroundImage: {
        "brand-mark": "linear-gradient(135deg,#1472FF,#F5B83D)",
        "navy-grad": "linear-gradient(180deg,#071B2F,#061322)"
      }
    }
  },
  plugins: []
};

export default config;
