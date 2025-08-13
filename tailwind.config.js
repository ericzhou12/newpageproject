/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#5C3A3A',
        
        'primary': '#FDF8F0',
        'secondary': '#8B4513',
        'accent': '#CD853F',
        'text-primary': '#FDF8F0',
        'text-secondary': '#F5E0C7',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      },
  },
  plugins: [],
};