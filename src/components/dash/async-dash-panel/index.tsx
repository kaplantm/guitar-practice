import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DataPointKeysType } from "../../../lib/constants/types";
import { getDataPointThunk } from "../../../lib/redux/slices/stockSlice";
import theme from "../../../theme";
// import useStyles from "./useStyles";

export function AsyncDashPanel({
  title,
  symbolName,
  Panel,
  dataPointKey,
}: {
  title: string;
  symbolName: string;
  Panel: any; //TODO: type
  dataPointKey: DataPointKeysType;
}) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    console.log("use effect", { symbolName, dataPointKey });
    if (symbolName && dataPointKey) {
      console.log("use effect in if", { symbolName, dataPointKey });
      dispatch(getDataPointThunk(symbolName, dataPointKey));
    }
    setLoading(false);
  }, [symbolName, dataPointKey, dispatch]);

  return (
    <Paper>
      <Box
        padding={2}
        pt={1}
        pb={1}
        borderBottom={`1px solid ${theme.palette.primary.main}`}
      >
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Panel loading={false} symbolName={symbolName} />
      </Box>
    </Paper>
  );
}
