/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-main": "#191C24",
        "custom-red": {
          50: "#fff1f1",
          100: "#ffe0e0",
          200: "#ffc6c6",
          300: "#ff9e9e",
          400: "#ff6666",
          500: "#fd3636",
          600: "#eb1616",
          700: "#c60f0f",
          800: "#a31111",
          900: "#871515",
          950: "#4a0505",
        },
        "custom-vulcan": {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d4d9e3",
          300: "#aeb9cb",
          400: "#8292ae",
          500: "#637594",
          600: "#4e5d7b",
          700: "#404b64",
          800: "#384154",
          900: "#323948",
          950: "#191c24",
        },
      },
    },
  },
  plugins: [],
};
