/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        islandMoments: ['Island Moments Regular', 'Arial', 'sans-serif'],
      },
      colors: {
        customGray: '#242424',
        customWhite: 'rgba(255, 255, 255, 0.87)',
      },
      backgroundImage: {
        'home-bg': "url('/src/assets/Home/bg.png')",
      },
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        zoomOut:{
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
        },
        scaling:{
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(2)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-in-out forwards', 
        zoomOut: 'zoomOut 0.3s ease-in-out forwards',
        scaling: 'scaling 0.3 ease-in-out',
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
