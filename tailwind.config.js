module.exports = {
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans' : ['FuturaPT-Book', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'futura-medium': ['FuturaPT-Medium'],
      'futura-book': ['FuturaPT-Book'],
      'kh-teka': ['KHTeka-Regular']
    },
    colors: {
      white: '#fff',
      black: '#000000',
      transparent: 'transparent',
      brand: {
        DEFAULT: '#e3232c',
        secondary: '#e33d30',
        dark: '#c61921',
        pressed: '#A61118',
        gray: '#f6f6f6',
        rebtelGray2: '#c4c4c4'
      },
      gray: {
        darker: '#333333',
        dark: '#666666',
        DEFAULT: '#808080',
        light: '#a3a3a3',
        gray3: '#DDDDDD',
        lighter: '#ececec',
        lighterV2: '#f6f6f6'
      },
      success: '#25c72c'
    },
    buttonColors: theme => theme('colors'),
    boxShadow: {
      brand: '0 0 1rem 0 rgba(13,37,62,0.1)'
    },
    extend: {
      fill: {
        brand: '#e3232c'
      },
      lineHeight: {
        'custom-1.4': '1.4',
        'custom-1.2': '1.2'
      },
      minWidth: {
        '1/2': '50%',
        '57.75': '15.75rem',
        80: '20rem',
        90: '23.4rem',
        24: '6rem',
        20: '5rem',
        18: '4.5rem',
        min: 'min-content',
        max: 'max-content'
      },
      minHeight: {
        8: '2rem',
        9: '2.25rem'
      },
      fontSize: {
        '3.5xl': '2rem',
        '5xl': '2.75rem',
        '6xl': '3rem',
        'xs': ['.75rem', '1rem'],
        'sm': ['.875rem', '1.25rem'],
        'base': ['1rem', '1.5rem'],
        'lg': ['1.125rem', '1.75rem'],
        'xl': ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2rem', '2.5rem'],
        '5xl': ['3rem', '1'],
        '6xl': ['3.75rem', '1'],
        '6.5xl': ['4rem', '1'],
        '7xl': ['4.5rem', '1'],
        '8xl': ['6rem', '1'],
        '9xl': ['8rem', '1'],
      },
      spacing: {
        18: '4.5rem',
        38: '9.5rem'
      },
      dropShadow: {
        normal: '0px 4px 14px rgba(0, 0, 0, 0.14)'
      }
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last', 'active'],
      padding: ['active']
    }
  },
  plugins: []
}
