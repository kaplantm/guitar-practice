import { Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import useStyles from "./useStyles";

export function NotesArray({ notesToPlay }: { notesToPlay: string[] }) {
  const classes = useStyles();
  const notesArray = notesToPlay.map((item: string, index: number) => {
    const key = `${item}-${index}`;
    return (
      <div
        key={key}
        className={clsx(classes.note, index <= 3 && classes.countdown)}
      >
        <Typography color="inherit" variant="h1">
          {item.toUpperCase()}
        </Typography>
      </div>
    );
  });
  return <>{notesArray}</>;
}

export default React.memo(NotesArray);
