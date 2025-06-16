/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include your components and pages
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },},
  },
  plugins: [],
};


