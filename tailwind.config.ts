import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#E5E5E5",
        surface: "#111111",
        "terminal-green": "#00D964",
        "fire-red": "#D90429",
        mustard: "#FFD166",
        aggressive: "#FF6B35",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #E5E5E5",
        "brutal-red": "4px 4px 0px 0px #D90429",
        "brutal-green": "4px 4px 0px 0px #00D964",
        "brutal-lg": "6px 6px 0px 0px #E5E5E5",
      },
    },
  },
  plugins: [],
};

export default config;
