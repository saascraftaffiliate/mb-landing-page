/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#293052',
        yellow: '#fbe64d',
        dark: '#1d1d1d',
        'white-64': 'rgba(255, 255, 255, 0.64)',
        'white-24': 'rgba(255, 255, 255, 0.24)',
        'white-08': 'rgba(255, 255, 255, 0.08)',
        'white-04': 'rgba(255, 255, 255, 0.04)',
        'yellow-24': 'rgba(251, 230, 77, 0.24)',
        'red-card': '#fef2f2',
        'green-card': '#f0fdf4',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fragment Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
      },
    },
  },
  plugins: [],
}