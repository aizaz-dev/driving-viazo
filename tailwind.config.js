/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        "background-start": "rgb(var(--background-start-rgb))",
        "background-end": "rgb(var(--background-end-rgb))",
        main: {
          50: "#f0f7ff",
          100: "#e0eefe",
          200: "#b9ddfe",
          300: "#7cc2fd",
          400: "#36a5fa",
          500: "#0c89eb",
          600: "#0068c4",
          700: "#0154a3",
          800: "#064886",
          900: "#0b3d6f",
          950: "#07264a",
        },
        accent: {
          50: "#eefbfd",
          100: "#d3f3fa",
          200: "#ade6f4",
          300: "#5bcae9",
          400: "#34b5dc",
          500: "#1898c2",
          600: "#177aa3",
          700: "#196385",
          800: "#1d526d",
          900: "#1d455c",
          950: "#0d2c3f",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
