import { red } from "@material-ui/core/colors";
import {
  createMuiTheme,
  darken,
  fade,
  lighten,
} from "@material-ui/core/styles";
import { darkPurple } from "./lib/constants/colors";

// TODO: change default font color
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: lighten(darkPurple, 0.3),
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: darken(darkPurple, 0.2),
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: darkPurple,
      },
    },
  },
});

export default theme;
