/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
        },
      },
    },
  },
  plugins: [],
};
