import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4bc0c8',
    },
    text: {
      primary: '#666666',
    },
    background: {
      default: '#f7fcfd',
    },
  },
  typography: {
    fontFamily: ['"M PLUS Rounded 1c"', 'sans-serif'].join(', '),
    fontWeightRegular: 500,
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
