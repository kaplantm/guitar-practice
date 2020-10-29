import {
  Box,
  TextField,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Add, HighlightOff } from "@material-ui/icons";
import clsx from "clsx";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  remove,
  // incrementByAmount,
  // incrementAsync,
  selectSymbolList,
} from "../../lib/redux/slices/symbolListSlice";
import { generateSymbol } from "../../lib/utils/symbolUtils";
import useStyles from "./useStyles";

export function Counter() {
  const classes = useStyles();
  const symbols = useSelector(selectSymbolList) || {};
  const dispatch = useDispatch();
  const [symbolText, setSymbolText] = useState("");

  const symbolsList = Object.keys(symbols).sort();
  const isValid = !!symbolText;

  function onChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSymbolText(event?.target?.value);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("onSubmit");
    dispatch(add(generateSymbol({ name: symbolText })));
    setSymbolText("");
  }
  function removeSymbol(symbolName: string) {
    console.log("remove", symbolName);
    dispatch(remove(symbols[symbolName]));
  }

  console.log({ symbols });
  return (
    <Paper square elevation={4} className={classes.sidebar}>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box display="flex" alignItems="center">
          <TextField
            InputProps={{ classes: { root: classes.symbolInput } }}
            id="outlined-basic"
            variant="outlined"
            onChange={onChange}
            value={symbolText}
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
        {symbolsList.map((symbol) => (
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            className={classes.symbolRow}
            key={symbol}
          >
            <IconButton
              className={clsx("trashButton", classes.trashButton)}
              onClick={() => removeSymbol(symbol)}
            >
              <HighlightOff color="primary" fontSize="small" />
            </IconButton>
            <Typography color="primary">{symbol.toUpperCase()}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
