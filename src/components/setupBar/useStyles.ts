import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { darkBlue } from "../../lib/constants/colors";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    transition: "opacity .5s",
    padding: theme.spacing(2),
    // borderRight: `2px solid ${darken(darkBlue, 0.4)}`,
    backgroundColor: darken(darkBlue, 0.32),
  },
  sidebarLower: {
    marginTop: theme.spacing(3),
  },
  fullDisabled: {
    opacity: 0.5,
  },
  symbolInput: {
    backgroundColor: lighten(darkBlue, 0.6),
    color: darken(darkBlue, 0.4),
  },
  symbolInputDisabled: {
    backgroundColor: lighten(darkBlue, 0.2),
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
    display: "flex",
    alignItems: "center",
    border: `1px solid ${lighten(darkBlue, 0.1)}`,
    margin: theme.spacing(1),
    minWidth: 100,
    padding: theme.spacing(1, 2, 1, 0),
    borderRadius: 6,
    "&:hover": {
      backgroundColor: darken(darkBlue, 0.38),
    },
  },
  symbolRowDisabled: {
    cursor: "auto",
  },
  selectedSymbolRow: {
    backgroundColor: darken(darkBlue, 0.45),
    "&:hover": {
      backgroundColor: darken(darkBlue, 0.5),
    },
  },
  slider: {
    maxWidth: "30rem",
    marginLeft: theme.spacing(3),
  },
  sliderLabel: {
    whiteSpace: "nowrap",
  },
  buttonIcon: {
    color: lighten(darkBlue, 0.6),
  },
}));

export default useStyles;
