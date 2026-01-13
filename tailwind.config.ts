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
        background: "rgb(9 9 11)", // zinc-950
        foreground: "rgb(255 255 255)", // white
        muted: "rgb(39 39 42)", // zinc-800
        "muted-foreground": "rgb(161 161 170)", // zinc-400
        primary: "rgb(251 191 36)", // amber-400
        "primary-foreground": "rgb(24 24 27)", // zinc-900
        border: "rgb(39 39 42)", // zinc-800
      },
    },
  },
  plugins: [],
};
export default config;
