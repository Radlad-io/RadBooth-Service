

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        'lightest': '#F7F7F7',
        'light': '#E3E3E3',
        'medium': '#707070',
        'dark': '#272727',
        'darkest': '#151515'
      },
      primary: {
        '0': '#FAF7FE',
        '1': '#E3DBF3',
        '2': '#CDBEE7',
        '3': '#A68DD1',
        '4': '#8563B7',
        DEFAULT: '#6A46A0',
        '6': '#543088',
        '7': '#412071',
        '8': '#301558',
        '9': '#240D41',
        '10': '#240D41',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

