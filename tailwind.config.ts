import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: {
          text: "#333333",
          background: "#FFFFFF",
          primary: "#007BFF",
          secondary: "#6C757D",
          accent: "#28A745",
        },
        dark: {
          text: "#FFFFFF",
          background: "#333333",
          primary: "#007BFF",
          secondary: "#6C757D",
          accent: "#28A745",
        },
      },
    },
  },
  plugins: [],
};

export default config;
