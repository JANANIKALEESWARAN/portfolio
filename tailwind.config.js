/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          500: '#667eea',
          600: '#5a67d8',
        },
        secondary: {
          DEFAULT: '#764ba2',
          500: '#764ba2',
        },
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      },
    },
  },
  plugins: [],
};
