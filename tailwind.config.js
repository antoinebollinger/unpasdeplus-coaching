/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'h-24',
    'w-24'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: "#ECE8EE",
          100: "#D9D0DD",
          200: "#C6B9CC",
          300: "#B3A1BB",
          400: "#A18AAB",
          500: "#8E739A",
          600: "#7B5B89",
          700: "#684478",
          800: "#552C67",
          900: "#421556"
        },
        'secondary': {
          50: "#F7F2F4",
          100: "#EFE5E9",
          200: "#E7D8DE",
          300: "#DFCBD3",
          400: "#D8BEC9",
          500: "#D0B1BE",
          600: "#C8A4B3",
          700: "#C097A8",
          800: "#B88A9D",
          900: "#B07D92"
        },
        'tertary': {
          50: "#F7F2F4",
          100: "#EFE5E9",
          200: "#E7D8DE",
          300: "#DFCBD3",
          400: "#D8BEC9",
          500: "#D0B1BE",
          600: "#C8A4B3",
          700: "#C097A8",
          800: "#B88A9D",
          900: "#1F7D5F"
        },
        'light-white': "rgba(255,255,255,0.8)"
      },
      inset: {
        '100': '100%',
      },
      padding: {
        '120': '120px',
      },
      animation: {
        piscaL: 'pisca 2s infinite 1.5s forwards',
        piscaR: 'pisca 2s infinite .5s forwards'
      },
      keyframes: {
        pisca: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0 },
          '75%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

