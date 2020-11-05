import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { darkBlue } from "../../lib/constants/colors";

export const noteSize = 150;
export const noteSpacing = 50;

const useStyles = makeStyles((theme) => ({
  scrollArea: {
    position: "relative",
    display: "flex",
    overflow: "scroll",
    marginBottom: theme.spacing(42),
  },
  songContainer: {
    transition: "left .5s",
    position: "relative",
    display: "flex",
    flex: 1,
    padding: theme.spacing(3),
  },
  inActiveBox: {
    position: "absolute",
    backgroundColor: darken(darkBlue, 0.5),
    opacity: 0.5,
    top: 0,
    bottom: 0,
    left: noteSize + noteSpacing,
    right: 0,
  },
  note: {
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
  currentNote: {
    border: `3px solid ${lighten(darkBlue, 0.5)}`,
    color: lighten(darkBlue, 0.6),
  },
  countdown: {
    opacity: 0.5,
  },
  dot: {
    transition: "background-color .5s",
    backgroundColor: lighten(darkBlue, 0.2),
  },
  activeDot: {
    backgroundColor: lighten(darkBlue, 0.6),
  },
}));

export default useStyles;
