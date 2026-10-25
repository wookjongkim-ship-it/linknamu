import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
      },
      boxShadow: {
        glass:
          "0 1px 2px rgba(120, 72, 40, 0.04), 0 10px 30px -14px rgba(120, 72, 40, 0.22)",
        "glass-hover":
          "0 1px 2px rgba(120, 72, 40, 0.05), 0 14px 34px -14px rgba(120, 72, 40, 0.28)",
      },
    },
  },
  plugins: [],
};
export default config;
