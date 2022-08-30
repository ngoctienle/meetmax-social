/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        head1: ['30px', '46px'],
        head2: ['26px', '40px'],
        head3: ['18px', '28px'],
        base: ['16px', '24px'],
        14: ['14px', '22px'],
        13: ['13px', '18px'],
        12: ['12px', '18px'],
        10: ['10px', '16px']
      },
      colors: {
        primary: '#377DFF',
        white: '#fff',
        gray: '#4E5D78'
      },
      opacity: {
        40: '.4'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {}
}
