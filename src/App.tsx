import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import "./App.css";
import { SetupBar } from "./components/setupBar";
import { NoteTray } from "./components/noteTray";

function App() {
  return (
    <Container>
      <Box mt={3} mb={3}>
        {/* TODO: play pause, countdown */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SetupBar />
          </Grid>
          <Grid item xs={12}>
            <NoteTray />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
