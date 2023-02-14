/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["/index.html", "/high-scores.html", "/src/*.js"],
  theme: {
    extend: {
      colors: {
        'custom-platinum': '#d8e2dcff',
        'champagne-pink': '#ffe5d9ff',
        'custom-pink': '#ffcad4ff',
      },
  },
  variants: {},
  plugins: [
    'tailwindcss'
  ],
}
}
