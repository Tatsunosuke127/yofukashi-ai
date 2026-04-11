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
        bg: "#0F0F0E",
        card: "#1C1B1A",
        accent: "#C4A882",
        text: "#F2EDE8",
        subtext: "#8A8680",
        border: "#2A2826",
      },
      fontFamily: {
        mincho: ["var(--font-shippori)"],
        sans: ["var(--font-noto)"],
        accent: ["var(--font-cormorant)"],
      },
      spacing: {
        section: "120px",
        "section-sp": "80px",
      },
      borderRadius: {
        card: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
