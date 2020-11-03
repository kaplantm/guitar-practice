import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import "./App.css";
import { SetupBar } from "./components/setupBar";

function App() {
  return (
    <Container>
      <Box mt={3} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SetupBar />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
