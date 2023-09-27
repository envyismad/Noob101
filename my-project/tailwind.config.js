/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
          colors: {
              "primary": "#CCCCFF",
              "secondary": "#C085FB",
              "tertiary": "#800080",
              "iris": "#EE9AES"
          },
          boxShadow: {
            '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
          }
    },
  },
  plugins: [],
}

