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
        "primary-light": "#F8F8F8",
        "primary-dark": "#1D4045",
        "secondary-light": "#58C3D1",
        "secondary-dark": "#387C85",
      },
    },
  },
  plugins: [],
};
