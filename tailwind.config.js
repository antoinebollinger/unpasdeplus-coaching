module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
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
          900: "#06A982"
        }
      },
      inset: {
        '100': '100%',
      },
      padding: {
        '120': '120px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}