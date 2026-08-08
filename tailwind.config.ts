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
        primary: {
          DEFAULT: "#3d2b1f",
          light: "#543c2c",
        },
        secondary: {
          DEFAULT: "#f08a00",
          light: "#ff9e1a",
        },
        surface: {
          DEFAULT: "#fffcf9",
          alt: "#fff4ea",
        },
        "text-main": "#2a1e16",
        "text-muted": "#6b5e54",
        "border-light": "#ebdcd1",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
    },
  },
  plugins: [],
};

export default config;
