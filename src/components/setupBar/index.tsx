import {
  Box,
  TextField,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Add, HighlightOff } from "@material-ui/icons";
import clsx from "clsx";
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, selectNotes } from "../../lib/redux/slices/stockSlice";
import useStyles from "./useStyles";

export function SetupBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const notesList = useSelector(selectNotes);

  const isValid = !!note;

  function onChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setNote(event?.target?.value);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(add(note));
    setNote("");
  }

  function removeNote(toRemove: string) {
    dispatch(remove(toRemove));
  }

  return (
    <Paper square elevation={4} className={classes.sidebar}>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box display="flex" alignItems="center">
          <TextField
            InputProps={{
              classes: { root: classes.symbolInput },
            }}
            id="outlined-basic"
            variant="outlined"
            onChange={onChange}
            value={note}
            placeholder="Enter stock symbol"
          />
          <IconButton
            className={classes.iconButton}
            classes={{ disabled: classes.iconButtonDisabled }}
            disabled={!isValid}
            type="submit"
          >
            <Add color="primary" fontSize="large" />
          </IconButton>
        </Box>
      </form>
      <Box mt={3} display="flex" flexDirection="column">
        {notesList.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            className={clsx(classes.symbolRow)}
            key={item}
          >
            <IconButton
              className={clsx("trashButton", classes.trashButton)}
              onClick={(e: MouseEvent<any>) => {
                e.stopPropagation();
                removeNote(item);
              }}
            >
              <HighlightOff color="primary" fontSize="small" />
            </IconButton>

            <Typography color="primary">{item.toUpperCase()}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
