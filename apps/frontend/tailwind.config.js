/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF54',
        secondary: '#FCCD2A',
        accent: '#C0EBA6',
        'light-text': '#FFFBE6',
        'dark-text': '#1E201E',
        'gray-third': '#757575',
        'light-bg': '#FBFBFB',
      },
    },
  },
  plugins: [],
};
