/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "border-gradient": "linear-gradient(180deg, #6857F6 0%, #A549E2 100%)",
      },
    },
  },
  plugins: [],
};
