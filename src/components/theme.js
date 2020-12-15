import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#44C792',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#302e41',
        // dark: will be calculated from palette.secondary.main,
      },
      content: {
        main: '#000000',
      },
    },
  });
  export default theme;