module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#421556',
        'secondary': '#b07d92'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}