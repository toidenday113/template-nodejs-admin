/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/public/index.html",
    "./server/resouces/views/**/*.ejs",
    "./server/app/components/**/*.js"
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
