/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Rubik Spray Paint"],
      design: ["Kaushan Script"],
      caption: ["PT Sans Caption"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
