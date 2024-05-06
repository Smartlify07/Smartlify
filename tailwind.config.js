/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#232536",
        white: "#FFFFFF",
        verylightorange: "#FFD3AF",
        lightblue: "#666DFF",
        royalblue: "#444CFC",
        lightorange: "#FFA155",
        lightgray: "#e5e5e5",
        darkgray: "#5D5F6D",
        verylightblue: "#ECF8F9",
        lightpink: "#FFE6D2",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
