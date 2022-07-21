/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{islands,routes,styles}/**/*.{ts,tsx,css,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
