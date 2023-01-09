/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },

      md: { max: "768px" },

      lg: { max: "1024px" },

      xl: { max: "1280px" },

      "2xl": { max: "1536px" },

      "mobile-l": { max: "425px" },

      "mobile-m": { max: "375px" },

      "mobile-s": { max: "320px" },
    },
    extend: {
      colors: {
        "bg-main": "#f7974a",
        "color-main": "#f58122",
        "white-bg": "#fde3ce",
      },
    },
  },
  plugins: [],
};
