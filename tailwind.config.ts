import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        primary: "#e4ecfd",
        secondary: "#fff",
        link: "#68B3DF",
        gray: "#6F6D74",
      },
    },
  },
  plugins: [],
} satisfies Config;
