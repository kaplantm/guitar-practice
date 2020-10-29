import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { darkPurple } from "../../lib/constants/colors";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    padding: theme.spacing(2),
    borderRight: `2px solid ${darken(darkPurple, 0.4)}`,
    backgroundColor: darken(darkPurple, 0.32),
  },
  symbolInput: {
    backgroundColor: lighten(darkPurple, 0.3),
  },
  iconButton: {
    margin: theme.spacing(0, 3),
  },
  iconButtonDisabled: {
    opacity: 0.3,
  },
  trashButton: {
    transition: "opacity .5s",
    margin: theme.spacing(0, 1, 0, 0),
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  symbolRow: {
    padding: theme.spacing(1, 2, 1, 0),
    "&:hover": {
      backgroundColor: darken(darkPurple, 0.35),
    },
  },
}));

export default useStyles;
