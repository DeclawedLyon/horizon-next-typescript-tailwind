/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{ts,js,tsx,jsx}',
    './src/components/**/*.{ts,js,tsx,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
