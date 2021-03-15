module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px'
      },
      height: {
        '320': '320px',
        '500': '500px'
      },
      animation: {
        lighthouse: 'lighthouse 5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in forwards'
      },
      keyframes: {
        lighthouse: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
