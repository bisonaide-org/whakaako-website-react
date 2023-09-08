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
      colors: {
        darkblue: "#2d3d57",
        cyan: "#00ffe8",
        magenta: "#dd4cdf",
        yellowgreen: "#d0ff38",
        gray: "#32353e",
        lightgray: "#9c9ca7",
        lightgraybackground: "#dde2ed",
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
