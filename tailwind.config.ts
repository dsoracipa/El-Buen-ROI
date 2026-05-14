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
        "pe-black": "#0A0A0A",
        "pe-green": "#00FF87",
        "pe-orange": "#FF6B2B",
        "pe-white": "#F0F0F0",
        "pe-900": "#111111",
        "pe-800": "#1A1A1A",
        "pe-700": "#252525",
      },
      fontFamily: {
        display: ["var(--font-display)", "Anton", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
