/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--display-font)",
      logo: "var(--logo-font)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        darkBlue:'#2D3D57',
        cyan:'#00FFE8',
        magenta:'#DD4CDF',
        yellowGreen:'#D0ff38',
        grayBodtText:'#32353E',
        lightGrayBodyText:'#9C9CA7'
      },
      fontSize: {
        small: ["0.9rem", "1.5"],
        p: ["0.938rem", "1.5"],
        quote: ["1rem", "1.5"],
        display4: ["1.5rem", "1.3"],
        display3: ["1.75rem", "1.3"],
        display2: ["2rem", "1.3"],
        display1: ["3rem", "1.3"],
      },
    },
  },
  plugins: [],
};
