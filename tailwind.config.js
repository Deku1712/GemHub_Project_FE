/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT( {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      cus:'1280px',
      xl: '1440px'
    },

    extend: {


      fontFamily: {
        SFUFuturaBold: ['SFUFuturaBold', 'sans-serif'],
        SFUFuturaBoldOblique: ['SFUFuturaBoldOblique', 'sans-serif'],
        SFUFuturaBook: ['SFUFuturaBook', 'sans-serif'],
        SFUFuturaBookOblique: ['SFUFuturaBookOblique', 'sans-serif'],
        SFUFuturaExtraBold: ['SFUFuturaExtraBold', 'sans-serif'],
        SFUFuturaExtraBoldOblique: ['SFUFuturaExtraBoldOblique', 'sans-serif'],
        SFUFuturaHeavy: ['SFUFuturaHeavy', 'sans-serif'],
        SFUFuturaHeavyOblique: ['SFUFuturaHeavyOblique', 'sans-serif'],
        SFUFuturaLight: ['SFUFuturaLight', 'sans-serif'],
        SFUFuturaLightOblique: ['SFUFuturaLightOblique', 'sans-serif'],
        SFUFuturaObliqueTTF: ['SFUFuturaObliqueTTF', 'sans-serif'],
        SFUFuturaRegular: ['SFUFuturaRegular', 'sans-serif'],
        SVNTakenbyVultures: ['SVN-TakenbyVultures', 'sans-serif'],
        SVNFutura: ['SVNFutura', 'sans-serif'],
        Roboto: ['Roboto']
      },
      colors: {
        'brown' : '#42210B'
      },
      keyframes:{
        'transheader' : {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: 0.25
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        'transicon': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: 0.25
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      },
      animation : {
        'transheader' : 'transheader 0.25s ease-in-out ',
        'transicon': 'transicon 0.3s ease-in-out'
      }
    }
  },
  plugins: [ require('flowbite/plugin')]
})