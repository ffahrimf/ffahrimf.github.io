/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
'dm-sans':['"DM Sans"', 'sans-serif'],
    'faktum': ['"Faktum-WideSemiBold"','sans-serif'],
},
    extend: {
      colors: {
        primary: '#5840BA',
        secondary: '#A4DB74',
        primaryhover: '#432E96',
        secondaryhover: '#6F984B',
      },
    },
  },
  plugins: [],
}

