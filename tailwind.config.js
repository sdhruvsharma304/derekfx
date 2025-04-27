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
        primary: "#2e2863",
        secondary: "#462e7c",
        accent: "#5f2a83",
        highlight1: "#30317c",
        highlight2: "#43439b",
      },
    },
  },
  plugins: [],
};
