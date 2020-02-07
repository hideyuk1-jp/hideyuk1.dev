import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
  },
  typography: {
    fontFamily: [
      '"M PLUS Rounded 1c"',
      'sans-serif',
    ].join(', '),
    button: {
      textTransform: 'none'
    },
  }
});

export default theme;