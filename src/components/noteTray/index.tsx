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
import metronome from "../../assets/metronome.wav";
import { darkBlue } from "../../lib/constants/colors";

// const metronomeFile = require("../../assets/metronome.wav");
// const metronome = new Audio(metronomeFile);

// TODO: move
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function wakeLock() {
  if ("wakeLock" in navigator) {
    const wakeLockInstance = await (navigator as any).wakeLock.request(
      "screen"
    );
    console.log(wakeLockInstance);
  }
}

const startingIndex = 10; // separate variable to ease manipulation for testing

export function NoteTray() {
  const classes = useStyles();
  const {
    list,
    totalBeats,
    bpm,
  }: { list: string[]; totalBeats: number; bpm: number } = useSelector(
    selectAllNotesSlice
  );
  const [notesToPlay, setNotesToPlay] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(startingIndex);
  const [audio, setAudio] = useState(false);
  const [play] = useSound(metronome, { volume: 1 });

  React.useEffect(() => {
    wakeLock();
  }, []);

  useEffect(() => {
    setActiveIndex(startingIndex);
    if (!list?.length || !totalBeats) {
      setNotesToPlay([]);
    }
    const uniqueNotes = list.length;
    const dividend = Math.floor(totalBeats / uniqueNotes);
    const remainer = totalBeats % uniqueNotes;
    console.log("****", { list, totalBeats, uniqueNotes });
    const notesToPlayNestedArray = list.map((note: string, index: number) => {
      const length = index === 0 ? dividend + remainer : dividend;
      console.log("****", { length, remainer, dividend });
      return new Array(length).fill(note);
    });
    const notesToPlayArray = notesToPlayNestedArray.flat();
    shuffleArray(notesToPlayArray);
    setNotesToPlay(notesToPlayArray);
  }, [list, totalBeats]);

  useEffect(() => {
    // TODO: bpm, ending, clear if bpm changes - or hide this whole component in edit mode so it all resets
    let interval: any;
    if (interval) {
      clearInterval(interval);
    }
    if (bpm && bpm < 500) {
      const timing = (1000 * 60) / bpm;
      interval = setInterval(() => {
        // console.log({ audio, metronome });
        if (audio) {
          console.log("play");
          setTimeout(function () {
            play();
          }, 100);
        }
        setActiveIndex((prev) => prev + 1);
      }, timing);
    }
    return () => clearInterval(interval);
  }, [bpm, audio]);

  const left = -(
    activeIndex * noteSpacing * 2 +
    activeIndex * noteSize +
    noteSpacing
  );

  console.log({ activeIndex, left });

  return (
    <Paper elevation={4} className={classes.scrollArea}>
      BPM: {bpm}
      <Button onClick={() => setAudio(true)}>audio</Button>
      <Box
        p={6}
        display="flex"
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
                  index === activeIndex && classes.currentNote
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
