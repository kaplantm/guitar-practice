import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { darkBlue } from "../../lib/constants/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    transition: "border .2s, background-color .2s",
    border: `3px solid ${lighten(darkBlue, 0.2)}`,
    backgroundColor: lighten(darkBlue, 0.1),
    "&:hover": {
      border: `3px solid ${lighten(darkBlue, 0.3)}`,
      backgroundColor: lighten(darkBlue, 0.15),
    },
  },
  buttonIcon: {
    margin: theme.spacing(1),
    color: lighten(darkBlue, 0.6),
    fontSize: "3rem",
  },
}));

export default useStyles;
