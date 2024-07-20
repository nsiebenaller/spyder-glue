import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-0": "#000000",
        "black-1": "#212121",
        "black-2": "#303730",
        white: "#FFFFFF",
        cream: "#F0F0E9",
        "green-1": "#7FFC41",
        "green-1-hover": "#75E93B",
        "green-2": "#43BE06",
        "green-3": "#236B08",
      },
      backgroundImage: {
        web: "url('/bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "btn-1": "3px 4px 0px rgba(0,0,0,1)",
        "btn-2": "1px 2px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
export default config;
