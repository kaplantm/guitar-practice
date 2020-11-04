import {
  Box,
  TextField,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Pause, PlayArrow, Stop } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { playerStatusEnum } from "../../lib/constants/types";
import useStyles from "./useStyles";

export function ControlBar({
  setPlayerStatus,
  playerStatus,
}: {
  playerStatus: playerStatusEnum;
  setPlayerStatus: (status: playerStatusEnum) => void;
}) {
  const classes = useStyles();

  function handleClickPlay(event: any) {
    setPlayerStatus(playerStatusEnum.PLAYING);
  }
  function handleClickPause(event: any) {
    setPlayerStatus(playerStatusEnum.PAUSED);
  }
  function handleClickStop(event: any) {
    setPlayerStatus(playerStatusEnum.STOPPED);
  }
  return (
    <Box display="flex" flex={1} ml={3} alignItems="center">
      <Box m={3}>
        <IconButton
          onClick={
            playerStatus === playerStatusEnum.PLAYING
              ? handleClickPause
              : handleClickPlay
          }
          className={classes.button}
        >
          {playerStatus === playerStatusEnum.PLAYING ? (
            <Pause className={classes.buttonIcon} />
          ) : (
            <PlayArrow className={classes.buttonIcon} />
          )}
        </IconButton>
      </Box>

      <Box m={3}>
        {playerStatus === playerStatusEnum.PAUSED && (
          <IconButton onClick={handleClickStop} className={classes.button}>
            <Stop className={classes.buttonIcon} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
