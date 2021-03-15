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
      backgroundColor: {
        'blueLight': 'rgba(147,197,253)',
        'blueDark': 'rgba(38,100,235)',
        'greenLight': 'rgba(112,231,183)',
        'greenDark': 'rgba(5,150,105)',
        'redLight': 'rgba(252,165,165)',
        'redDark': 'rgba(220,38,38)',
        'yellowLight': 'rgba(252,211,79)',
        'yellowDark': 'rgba(217,119,8)'
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