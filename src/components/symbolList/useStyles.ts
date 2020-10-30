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
    cursor: "pointer",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(1, 2, 1, 0),
    borderRadius: 6,
    "&:hover": {
      backgroundColor: darken(darkPurple, 0.38),
    },
  },
  selectedSymbolRow: {
    backgroundColor: darken(darkPurple, 0.45),
    "&:hover": {
      backgroundColor: darken(darkPurple, 0.5),
    },
  },
}));

export default useStyles;
