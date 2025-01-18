/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#B8860B',
        silver: '#848884',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Cormorant', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#E5E5E5',
            fontFamily: 'Cormorant, serif',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            h1: {
              color: '#B8860B',
              fontFamily: 'Cinzel, serif',
            },
            h2: {
              color: '#B8860B',
              fontFamily: 'Cinzel, serif',
            },
            strong: {
              color: '#B8860B',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};