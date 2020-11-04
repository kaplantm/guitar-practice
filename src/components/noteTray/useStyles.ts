import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { darkBlue } from "../../lib/constants/colors";

export const noteSize = 150;
export const noteSpacing = 50;

const useStyles = makeStyles((theme) => ({
  scrollArea: {
    overflow: "hidden",
  },
  songContainer: {
    transition: "left .5s",
    position: "relative",
    left: -50,
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
  },
  currentNote: {
    border: `3px solid ${lighten(darkBlue, 0.5)}`,
    color: lighten(darkBlue, 0.6),
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