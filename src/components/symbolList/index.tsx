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
import { useDispatch } from "react-redux";
import { Nullable, SymbolType } from "../../lib/constants/types";
import { add, remove } from "../../lib/redux/slices/stockSlice";
import { generateSymbol } from "../../lib/utils/symbolUtils";
import useStyles from "./useStyles";

export function SymbolList({
  symbolNameList,
  selectedSymbol,
  setSelectedSymbol,
  setSelectedSymbolByName,
}: {
  symbolNameList: string[];
  selectedSymbol: Nullable<SymbolType>;
  setSelectedSymbol: (symbolName: Nullable<SymbolType>) => void;
  setSelectedSymbolByName: (symbolName: Nullable<string>) => void;
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [symbolText, setSymbolText] = useState("");

  const isValid = !!symbolText;

  function onChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSymbolText(event?.target?.value);
  }

  function selectSymbol(symbolName: Nullable<string>) {
    setSelectedSymbolByName(symbolName);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newSymbol = generateSymbol({ name: symbolText });
    dispatch(add(newSymbol));
    setSelectedSymbol(newSymbol);
    setSymbolText("");
  }

  function removeSymbol(symbolName: string) {
    if (selectedSymbol?.name === symbolName) {
      selectSymbol(null);
    }
    dispatch(remove(symbolName));
  }

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
        {symbolNameList.map((symbolName) => (
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            className={clsx(
              classes.symbolRow,
              selectedSymbol?.name === symbolName && classes.selectedSymbolRow
            )}
            key={symbolName}
            onClick={() => selectSymbol(symbolName)}
          >
            <IconButton
              className={clsx("trashButton", classes.trashButton)}
              onClick={(e: MouseEvent<any>) => {
                e.stopPropagation();
                removeSymbol(symbolName);
              }}
            >
              <HighlightOff color="primary" fontSize="small" />
            </IconButton>

            <Typography color="primary">{symbolName.toUpperCase()}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
