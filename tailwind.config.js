/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        itim: ["Itim", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        textColor: "#E0E0E0",
        labelColor: "#908E9B",
        disabledColor: "#E1DFE9",
        blackBg: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
