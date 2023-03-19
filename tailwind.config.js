/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  purge: ["./src/**/*.{html,js,ts,jsx,tsx}"],
};
