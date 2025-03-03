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
        blackColor: "#000",
        lightGrey: "#F5F5F5",
        whiteColor:"#ffff",
        cardPriceColor:'#DB4444',
        greyText:"#7D8184",
        bgGrey:"#F3F4F6",
        sliderbg:"#F8D6A4",
        greyBg:"#2F2E30"
      },
      fontFamily: {
        raleway : ["var(--font-raleway)"]
      },
    },
    screens: {
      xxs: "300px",
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
