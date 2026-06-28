
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#030712',
          surface1: '#0c1e3b',
          surface2: '#0e2447',
          surface3: '#122c56',
          warmDark: '#050811',
          gold: '#c62828',
          goldHi: '#ef5350',
          goldDim: '#b71c1c',
          blue: '#2196f3',
          text1: '#e2e8f0',
          text2: '#90a1b9',
          text3: '#45556c',
          border1: '#163060',
          border2: '#1e3d75',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Geist', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Geist', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
