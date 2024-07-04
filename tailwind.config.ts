import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "Plus Jakarta Sans"
      },
      colors: {
        green: {
          1: "#18400F",
          2: "#308681"
        },
        yellow: {
          1: "#FAFF04"
        }
      }
    },
  },
  plugins: [],
};
export default config;
