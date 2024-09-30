/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1a1a2e",
        "light-blue": "#2a2a3e",
        "accent-blue": "#4a4ae9",
      },
    },
  },
  plugins: [],
};
