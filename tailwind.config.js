/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors : {
        "background-main-color" : "#F4F4F5",
        "blue-primary" : "#0B3889",
        "blue-secondry" : "#1C39ff",
        "blue-thirdry" : "#5B80A3",
        "green-primary" : "#00A693",
        "black-primary" : "#292525",
        "gray-primary" : "#F3F5FA",
        "gray-secondary" : "#E7E7E7",
        "gray-thirdary" : "#B2B3B6",
        "red-primary" : "#EA536F",
        "dark-555" : "#555555"
      },
      screens : {
        "x-mobile" : "500px",
        "xl-mobile" : "560px",
        "mobile" : "640px",
        "tablet" : "760px",
        "laptop" : "1024px",
        "desktop" : "1440px"
      },
      fontFamily : {
        'vazir' : 'Vazirmatn'
      }
    },
  },
  plugins: [],
}
