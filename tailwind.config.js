/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← make sure this is correct
  ],
  theme: {
    extend: {
      animation: {
    'pulse-slow': 'pulse 3s ease-in-out infinite',
  },
    },
  },
  plugins: [],
}

