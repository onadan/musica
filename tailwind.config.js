/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a4c7c6",
        secondary: "#facd66",
        light: "#efeee0",
        dark: "#1d2123",
        darkAlt: '#1a1e1f',
      },
    },
  },
};
