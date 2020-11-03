import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
// import useStyles from "./useStyles";

export function Dash({ symbolName }: { symbolName: string }) {
  // const classes = useStyles();
  if (!symbolName) {
    // TODO: make generic error component
    return <h3>missing symbol name</h3>;
  }
  return (
    <Container>
      <Box mt={3} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <AsyncDashPanel
              Panel={QuotePanel}
              symbolName={symbolName}
              dataPointKey="quote"
              title="Quote"
            /> */}
          </Grid>
          {/* <Grid item xs={6}>
            <AsyncDashPanel
              Panel={QuotePanel}
              symbolName={symbolName}
              dataPointKey="quote"
              title="Price Targets"
            />
          </Grid>
          <Grid item xs={6}>
            <AsyncDashPanel
              Panel={QuotePanel}
              symbolName={symbolName}
              dataPointKey="quote"
              title="Recommendations"
            />
          </Grid>
          <Grid item xs={12}>
            <AsyncDashPanel
              Panel={QuotePanel}
              symbolName={symbolName}
              dataPointKey="quote"
              title="Basic Financials"
            />
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}
