/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'book-brown': '#8B4513',
        'page-cream': '#FDF8F0',
        'text-dark': '#2C1810',
        'accent-gold': '#D4AF37',
        'shadow-brown': 'rgba(139, 69, 19, 0.3)',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'page-flip': 'pageFlip 0.6s ease-in-out',
        'book-open': 'bookOpen 0.8s ease-in-out',
      },
      keyframes: {
        pageFlip: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        bookOpen: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-15deg)' },
        },
      },
    },
  },
  plugins: [],
};