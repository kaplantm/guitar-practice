import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectSymbol } from "../../../../../lib/redux/slices/stockSlice";
import useStyles from "./useStyles";

export function QuotePanel(props: any) {
  const classes = useStyles();

  const symbol = useSelector(selectSymbol(props.symbolName) || {});

  console.log("QuotePanel", { props, symbol });
  return <Box className={classes.dash}>quote panel</Box>;
}
