import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4bc0c8',
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
    fontWeightRegular: 500,
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
