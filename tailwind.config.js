/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/photo-1714779573250-36242918e044.jpeg')",
        "hero-pattern-mobile": "url('/src/assets/HeroImage.jpg')",
        "bg-pattern" : "url('/src/assets/vecteezy_abstract-shiny-dark-blue-fog-flow-smoke-luxury-fluid_4668332.jpg')",
        
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.translate-z-60': {
          transform: 'translateZ(60px)',
        },
      })
    },
  ],
};