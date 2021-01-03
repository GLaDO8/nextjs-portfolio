module.exports = {
  purge: {
    enabled: true,
    content: [
      './components/**/*.js',
      './components/*.js',
      './pages/**/*.js',
      './pages/*.js',
    ],
  },
  theme: {
    fontFamily: {
      title: ['Rubik', 'sans-serif'],
      sans: ['Rubik', 'sans-serif'],
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'inactive-gray': '#9F9F9F',
        'grey-secondary': '#747474',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        'lg': '1.075rem',
        'xl': '1.4rem',
        '2xl': '1.6rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      maxWidth: {
        '2xl': '36rem',
        '3xl': '50rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
