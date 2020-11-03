import { Box, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { SymbolType, Nullable } from "../../lib/constants/types";
import useStyles from "./useStyles";

export function Dash({
  selectedSymbol,
}: {
  selectedSymbol: Nullable<SymbolType>;
}) {
  const classes = useStyles();

  // useEffect(() => {
  //   const onGetData = (error: any, data: any, response: any) => {
  //     if (error) {
  //       setState((prev) => ({ ...prev, error }));
  //     } else {
  //       setState({
  //         data,
  //         error,
  //         updatedAt: new Date().getTime(),
  //       });
  //     }
  //   };

  // TODO
  // quote - refresh button for quote
  // price targets - separate refresh buttons for everything else
  // reccs
  // basic financials
  // Company Profile 2
  // when page loads refresh quote if older than 15 minutes
  // refresh everything else if older than 12 hours
  // types for each endpoint
  // notes panel - local storage

  //   if (selectedSymbol?.name) {
  //     // createListenerForSymbol(selectedSymbol.name, (event: any) => {
  //     //   console.log("Message from server ", event.data);
  //     // });
  //     getQuote(selectedSymbol?.name, onGetData);
  //   }
  // }, [selectedSymbol]);

  return <Box className={classes.dash}>dash: {selectedSymbol?.name}</Box>;
}
