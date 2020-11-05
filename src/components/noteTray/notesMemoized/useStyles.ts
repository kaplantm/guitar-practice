import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { darkBlue } from "../../../lib/constants/colors";

export const noteSize = 150;
export const noteSpacing = 50;

const useStyles = makeStyles((theme) => ({
  note: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "border .5s, color .5s",
    padding: theme.spacing(3, 0),
    width: noteSize,
    marginLeft: noteSpacing,
    marginRight: noteSpacing,
    borderRadius: 6,
    border: "3px solid transparent",
    flexShrink: 0,
    flexGrow: 0,
    color: lighten(darkBlue, 0.3),
    backgroundColor: darken(darkBlue, 0.1),
  },
  countdown: {
    opacity: 0.5,
  },
}));

export default useStyles;
