/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{components,islands,routes,styles}/**/*.{ts,tsx,css,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
