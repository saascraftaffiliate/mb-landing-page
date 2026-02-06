/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#293052',
        'primary-dark': '#1d1d1d',
        accent: '#fbe64d',
        muted: 'rgba(255, 255, 255, 0.64)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fragment Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}