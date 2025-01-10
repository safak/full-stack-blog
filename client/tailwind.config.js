/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-primary-color': '#455A64',
        'light-primary-color': '#CFD8DC',
        'primary-color': '#607D8B',
        'icon-color': '#FFFFFF',
        'accent-color': '#03A9F4',
        'primary-text-color': '#212121',
        'secondary-text-color': '#757575',
        'divider-color': '#BDBDBD',
      }
    },
  },
  plugins: [],
};