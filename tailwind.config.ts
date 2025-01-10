import type { Config } from "tailwindcss";

export default {
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
        deepBlue: "#1D3557",
        emeraldGreen: "#2A9D8F",
        slateGray: "#264653",
        gold: "#E9C46A",
        crimsonRed: "#E63946",
        lightGray: "#F4F4F9",
        offWhite: "#FAF9F6",
        charcoalGray: "#3A3A3A",
        teal: {
          450: "#5eead4",
          750: "#134E4A",
        },
        blue: {
          950: "#0f172a",
        },
        steelBlue: "#457B9D",
      },
    },
  },
  plugins: [],
} satisfies Config;
