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
        "eco-green":  "#2ECC71",
        "eco-dark":   "#0F172A",
        "eco-surface":"#1E293B",
        "eco-border": "#334155",
      },
    },
  },
  plugins: [],
};
export default config;
