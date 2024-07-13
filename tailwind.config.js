
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:['Montserrat', "sans-serif"],
        Poppins:["Poppins", "sans-serif"],
      },
      gridTemplateColumns:{
        custom:"repeat(4, minmax(345px, 1fr))"
      },
      gridAutoRows:{
        custom:"460px"
      },
      gridColumn:{
        'span-custom':" 3 / span 2"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}