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
        background: "hsl(0 0% 3.6%)",
        foreground: "hsl(0 0% 98%)",
        muted: "hsl(0 0% 14.9%)",
        "muted-foreground": "hsl(0 0% 63.9%)",
        primary: "hsl(48 96.1% 40.8%)",
        "primary-foreground": "hsl(0 0% 9%)",
        border: "hsl(0 0% 14.9%)",
      },
    },
  },
  plugins: [],
};
export default config;
