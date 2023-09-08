/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        darkBlue:'#2D3D57',
        cyan:'#00FFE8',
        magenta:'#DD4CDF',
        yellowGreen:'#D0ff38',
        grayBodtText:'#32353E',
        lightGrayBodyText:'#9C9CA7'
      }
    },
  },
  plugins: [],
}
