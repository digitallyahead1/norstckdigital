
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // All colors reference CSS custom properties so dark/light theme switching works
          bg:       'var(--bg-0)',
          surface1: 'var(--bg-1)',
          surface2: 'var(--bg-2)',
          surface3: 'var(--bg-3)',
          warmDark: 'var(--warm-dark)',
          gold:     'var(--gold)',
          goldHi:   'var(--gold-hi)',
          goldDim:  'var(--gold-dim)',
          cyan:     'var(--gold)',
          purple:   'var(--purple)',
          violet:   '#8b5cf6',
          blue:     'var(--blue)',
          text1:    'var(--text-1)',
          text2:    'var(--text-2)',
          text3:    'var(--text-3)',
          border1:  'var(--border-1)',
          border2:  'var(--border-2)',
        }
      },
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
        serif:   ['Instrument Serif', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
