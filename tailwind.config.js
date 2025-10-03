// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        // your brand colors (keep what you already have)
        "brand-orange": "#EE6823",
        "brand-black": "#09101B",
        "brand-white": "#FFFFFF",
        "brand-coolgrey": "#3C5164",
        "brand-coolgrey01": "#96AFC6",
        "brand-coolgrey02": "#CCDEEE",

        // add these:
        "surface-900": "#0B1422",
        "surface-800": "#0E1828",
        "surface-700": "#122038",
        "surface-600": "#1A2A43",
        "surface-outline": "#22324A",
      },
      boxShadow: {
        glow: "0 0 40px rgba(238,104,35,0.25)",
      },
    },
  },
  plugins: [],
};
