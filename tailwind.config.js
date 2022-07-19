/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/public/index.html",
    "./server/resouces/views/**/*.ejs",
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
