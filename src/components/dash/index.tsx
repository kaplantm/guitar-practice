import { Box, Paper } from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";

export function Dash() {
  const classes = useStyles();

  return (
    <Box className={classes.dash}>dash</Box>
    // <div>
    //   <div>
    //     <button
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //     <span>{count}</span>
    //     <button
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //   </div>
    //   <div>
    //     <input
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={(e) => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       onClick={() =>
    //         dispatch(incrementByAmount(Number(incrementAmount) || 0))
    //       }
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    //     >
    //       Add Async
    //     </button>
    //   </div>
    // </div>
  );
}
