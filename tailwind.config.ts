import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00b8ff",
          pink: "#00b8ff",
          green: "#00d4ff",
          blue: "#3b82f6",
          purple: "#00b8ff",
        },
        dark: {
          bg: "#0d1117",
          card: "#161b22",
          border: "#21262d",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradient": "gradient 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00b8ff, 0 0 10px #00b8ff, 0 0 15px #00b8ff" },
          "100%": { boxShadow: "0 0 10px #00b8ff, 0 0 20px #00b8ff, 0 0 30px #00b8ff" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

