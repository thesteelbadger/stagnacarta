/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },
      colors: {
        sc: {
          bg: '#fafaf8',
          'bg-dark': '#1a1a1a',
          text: '#1a1a1a',
          'text-dark': '#e0e0e0',
          accent: '#4a6670',
          'accent-dark': '#7fa8b5',
          muted: '#6b7280',
          'muted-dark': '#9ca3af',
          border: '#e5e5e3',
          'border-dark': '#333333',
          ref: '#f5f4f0',
          'ref-dark': '#242424',
        },
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
