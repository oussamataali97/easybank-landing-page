/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(233,26%,24%)",
        LimeGreen: 'hsl(136,65%,51%)',
        BrightCyan: 'hsl(192, 70%,51%)',
        GrayishBlue: 'hsl(233, 8%, 62%)',
        LightGrayishBlue: 'hsl(220, 16%, 96%)',
        verylightgray: 'hsl(0,0%,98%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'public': "'Public Sans', sans-serif",
        'lora': "'Explora', cursive",
      },
      fontWeight: {
        'regular': 300,
        'normal': 400,
        'lrg': 700,
      },
      animation: {
        'spin-slow': 'spin  .3s linear',
      }
    },
  },
  plugins: [],
}
