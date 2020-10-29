import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Create React App v4-beta example
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
