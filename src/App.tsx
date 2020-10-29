import React from "react";
import { Box } from "@material-ui/core";
import "./App.css";
import { Counter } from "./components/symbolList";
import { Dash } from "./components/dash";

function App() {
  return (
    <Box display="flex" flex={1}>
      <Counter />
      <Dash />
    </Box>
  );
}

export default App;
