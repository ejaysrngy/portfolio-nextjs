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
        "bg-gray": "#BBBBBB",
        "red-accents": "#a50000",
      },
      fontFamily: {
        // add helvetica fonts to be used
        helvetica: ["helvetica", "sans-serif"],
        // add poppins
        poppins: ["var(--font-poppins)"],
        // add big shoulders
        bigshoulders: ["Big Shoulders Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
