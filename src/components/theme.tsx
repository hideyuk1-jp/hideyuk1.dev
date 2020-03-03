import { createMuiTheme } from '@material-ui/core/styles';

const primaryShadow = '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4bc0c8',
      contrastText: '#fff',
    },
    text: {
      primary: '#666',
      secondary: '#999',
    },
    background: {
      default: '#f7fcfd',
    },
  },
  typography: {
    fontFamily: [
      '"M PLUS Rounded 1c"',
      '-apple-system,BlinkMacSystemFont',
      '"Helvetica Neue"',
      '"游ゴシック Medium"',
      'YuGothic',
      'YuGothicM',
      '"Hiragino Kaku Gothic ProN"',
      'メイリオ',
      'Meiryo',
      'sans-serif',
    ].join(', '),
    fontWeightRegular: 400,
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '2em',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5em',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.25em',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1em',
    },
    h5: {
      fontSize: '.875em',
    },
    h6: {
      fontSize: '.85em',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        'box-shadow': primaryShadow,
      },
      outlined: {
        'box-shadow': primaryShadow,
      },
    },
    MuiChip: {
      root: {
        'border-radius': '4px',
      },
    },
  },
});

export default theme;
