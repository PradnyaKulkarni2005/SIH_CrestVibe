/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // 👈 This tells Tailwind to scan all React files
    "./public/index.html"           // Optional, but good to include
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
