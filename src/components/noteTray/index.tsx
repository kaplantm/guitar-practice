import {
  Box,
  TextField,
  Paper,
  IconButton,
  Typography,
  Button,
  lighten,
} from "@material-ui/core";
import { Add, HighlightOff } from "@material-ui/icons";
import clsx from "clsx";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import {
  add,
  remove,
  selectAllNotesSlice,
} from "../../lib/redux/slices/stockSlice";
import useStyles, { noteSpacing, noteSize } from "./useStyles";
import metronomeFile from "../../assets/metronome.wav";
import { darkBlue } from "../../lib/constants/colors";
import { playerStatusEnum } from "../../lib/constants/types";
import { RootStateType } from "../../lib/redux/rootReducer";

// const metronomeFile = require("../../assets/metronome.wav");
// const metronome = new Audio(metronomeFile);

// TODO: move
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function wakeLock() {
  if ("wakeLock" in navigator) {
    (navigator as any).wakeLock.request("screen");
  }
}

const startingIndex = 0; // separate variable to ease manipulation for testing

function setUpNotesToPlay(list: string[], totalBeats: number) {
  if (!list?.length || !totalBeats) {
    return [];
  }
  const uniqueNotes = list.length;
  const dividend = Math.floor(totalBeats / uniqueNotes);
  const remainer = totalBeats % uniqueNotes;
  const notesToPlayNestedArray = list.map((note: string, index: number) => {
    const length = index === 0 ? dividend + remainer : dividend;
    return new Array(length).fill(note);
  });
  const notesToPlayArray = notesToPlayNestedArray.flat();
  shuffleArray(notesToPlayArray);
  return ["1", "2", "3", "4", ...notesToPlayArray];
}

export function NoteTray({ playerStatus }: { playerStatus: playerStatusEnum }) {
  const classes = useStyles();
  const { list, minutes, bpm, metronome }: RootStateType["notes"] = useSelector(
    selectAllNotesSlice
  );
  const totalBeats = minutes * bpm;
  // const [notesToPlay, setNotesToPlay] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(startingIndex);
  const [play] = useSound(metronomeFile, { volume: 1 });
  const notesToPlay = React.useMemo(() => setUpNotesToPlay(list, totalBeats), [
    list,
    totalBeats,
  ]);
  const hasEnded = activeIndex >= notesToPlay.length - 1;

  React.useEffect(() => {
    wakeLock();
  }, []);

  // TODO: blur from end to fade out

  useEffect(() => {
    // TODO: bpm, ending, clear if bpm changes - or hide this whole component in edit mode so it all resets
    let interval: any;
    if (playerStatus !== playerStatusEnum.PLAYING && interval) {
      clearInterval(interval);
    } else {
      if (
        bpm &&
        bpm < 500 &&
        playerStatus === playerStatusEnum.PLAYING &&
        !hasEnded
      ) {
        const timing = (1000 * 60) / bpm;
        interval = setInterval(() => {
          if (metronome) {
            setTimeout(function () {
              play();
            }, 100);
          }
          setActiveIndex((prev) => prev + 1);
        }, timing);
      }
    }
    return () => clearInterval(interval);
  }, [bpm, metronome, playerStatus, play, hasEnded]);

  const left = -(
    activeIndex * noteSpacing * 2 +
    activeIndex * noteSize +
    noteSpacing
  );

  return (
    <Paper elevation={4} className={classes.scrollArea}>
      <Box
        className={classes.songContainer}
        style={{
          left,
        }}
      >
        {notesToPlay.map((item: string, index: number) => {
          const key = `${item}-${index}`;
          return (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              key={key}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={clsx(
                  classes.note,
                  index === activeIndex && classes.currentNote,
                  index <= 3 && classes.countdown
                )}
              >
                <Typography color="inherit" variant="h1">
                  {item.toUpperCase()}
                </Typography>
              </Box>
              <Box
                className={clsx(
                  classes.dot,
                  index === activeIndex && classes.activeDot
                )}
                borderRadius={10}
                width={20}
                height={20}
                margin={3}
              />
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}
