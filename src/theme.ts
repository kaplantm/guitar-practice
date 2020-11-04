import { red } from "@material-ui/core/colors";
import { createMuiTheme, darken, lighten } from "@material-ui/core/styles";
import { darkBlue, darkTeal } from "./lib/constants/colors";

// TODO: change default font color
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: lighten(darkBlue, 0.6),
    },
    secondary: {
      main: lighten(darkBlue, 0.3),
    },
    error: {
      main: red.A400,
    },
    background: {
      default: darken(darkBlue, 0.2),
    },
    text: {
      primary: lighten(darkBlue, 0.5),
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: darkBlue,
      },
    },
  },
});

export default theme;
