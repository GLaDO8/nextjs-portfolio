module.exports = {
  mode: 'jit',
  darkMode: 'class',
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
      title: [
        'Rubik',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
      ],
      sans: [
        'Rubik',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
      ],
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        'grey-text': 'rgba(0, 0, 0, 0.76)',
        'link-blue': '#06c',
        'dark-mode-link-blue': '#4CBFFF',
        'inactive-gray': '#9F9F9F',
        'grey-secondary': '#747474',
        'dark-mode-black': '#131313',
        'dark-mode-gray': '#8A8A8A',
        'dark-mode-blockquote-gray': '#363636',
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
      fontWeight: { 'preview-desc': '350' },
      fontSize: {
        'base': '1.2rem',
        'lg': '1.3rem',
        'xl': '1.4rem',
        '2xl': '1.8rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
        '7xl': '4rem',
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
