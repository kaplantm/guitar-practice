import React, { useState } from "react";
import { Box, Grid, Container } from "@material-ui/core";
import smoothscroll from "smoothscroll-polyfill";
import SetupBar from "./components/setupBar";
import NoteTray from "./components/noteTray";
import { playerStatusEnum } from "./lib/constants/types";
import ControlBar from "./components/controlBar";

function wakeLock() {
  if ("wakeLock" in navigator) {
    (navigator as any).wakeLock.request("screen");
  }
}

function App() {
  React.useEffect(() => {
    wakeLock();
    smoothscroll.polyfill();
  }, []);
  const [playerStatus, setPlayerStatus] = useState<playerStatusEnum>(
    playerStatusEnum.STOPPED
  );
  return (
    <Container maxWidth="lg">
      <Box display="flex" flex={1} mt={3} mb={3}>
        {/* TODO: play pause, countdown */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SetupBar disabled={playerStatus !== playerStatusEnum.STOPPED} />
          </Grid>
          <Grid item xs={12}>
            <ControlBar
              playerStatus={playerStatus}
              setPlayerStatus={setPlayerStatus}
            />
          </Grid>
          <Grid item xs={12}>
            {playerStatus !== playerStatusEnum.STOPPED && (
              <NoteTray playerStatus={playerStatus} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
