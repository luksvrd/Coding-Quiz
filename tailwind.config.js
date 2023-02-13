/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["/index.html", "/high-scores.html", "/src/*.js"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#809bce',
        'secondary': '#95b8d1',
        'green': '#b8e0d2',
        'light-green': '#d6eadf',
        'pink': '#eac4d5',
      },
    },
  },
  plugins: [
    'tailwindcss'
  ],
}
