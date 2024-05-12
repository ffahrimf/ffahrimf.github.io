/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
'dm-sans':['"Poppins"', 'sans-serif'],
    'faktum': ['"Faktum-WideSemiBold"','sans-serif'],
    'asgard': ['"AsgardTrial-WideRegular"','sans-serif'],
    'handoSoft': ['"HandoSoftTrial-Regular"','sans-serif'],
    'akira': ['"Akira-Expanded-Demo"','sans-serif'],
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

