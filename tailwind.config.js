/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0F0F0F',
        charcoal: '#1A1A1A',
        gold: '#C9A227',
        'gold-light': '#D8B75B',
        'gold-pale': '#E8CC7A',
        ivory: '#FAF8F4',
        'ivory-dim': '#F0EDE6',
        'gold-glow': 'rgba(201,162,39,0.15)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Didact Gothic"', '"Jost"', 'sans-serif'],
        accent: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
