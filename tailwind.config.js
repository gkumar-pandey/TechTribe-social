/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      extend: {
        transitionProperty: {
          height: "height"
        }
      }
    },
    screens: {
      sm: { max: "600px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "601px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1025px" }
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // => @media (min-width: 1536px) { ...
    }
  },
  plugins: []
};
