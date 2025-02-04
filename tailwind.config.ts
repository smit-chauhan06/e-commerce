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
       blackColor:"#000",
       lightGrey:"#F5F5F5"
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
    fontFamily:{
      ralewayBlack:["ralewayBlack"],
      ralewayExtraBold:["ralewayExtraBold"],
      ralewayExtraLight:["ralewayExtraLight"],
      ralewayLight:["ralewayLight"],
      ralewayMedium:["ralewayMedium"],
      ralewayRegular:["ralewayRegular"],
      ralewaySemiBold:["ralewaySemiBold"],
      ralewayBold:["ralewayBold"],
    }
  },
  plugins: [],
} satisfies Config;
