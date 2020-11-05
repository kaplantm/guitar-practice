import { Box, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import { selectAllNotesSlice } from "../../lib/redux/slices/stockSlice";
import useStyles, { noteSpacing, noteSize } from "./useStyles";
import metronomeFile from "../../assets/metronome.wav";
import { playerStatusEnum } from "../../lib/constants/types";
import { RootStateType } from "../../lib/redux/rootReducer";
import NotesArray from "./notesMemoized";
import useInterval from "../../hooks/useInterval";

// TODO: move
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const startingIndex = 0; // separate variable to ease manipulation for testing

function setUpNotesToPlay(list: string[], totalBeats: number) {
  console.log("setup");
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
  const songContainerRef = React.useRef(null);
  const totalBeats = minutes * bpm;
  const [activeIndex, setActiveIndex] = useState(startingIndex);
  const [play] = useSound(metronomeFile, { volume: 1 });
  const notesToPlay = React.useMemo(() => setUpNotesToPlay(list, totalBeats), [
    list,
    totalBeats,
  ]);
  const hasEnded = activeIndex >= notesToPlay.length - 1;
  const runInterval = !hasEnded && playerStatus === playerStatusEnum.PLAYING;
  const timing = (1000 * 60) / bpm;
  const left = activeIndex * noteSpacing * 2 + activeIndex * noteSize;
  useInterval(
    () => {
      if (
        bpm &&
        bpm < 500 &&
        playerStatus === playerStatusEnum.PLAYING &&
        !hasEnded
      ) {
        console.log("songContainerRef.current", songContainerRef.current);
        if (songContainerRef.current) {
          console.log("scrroll", { left });
          (songContainerRef.current as any).scrollTo({
            left,
            behavior: "smooth",
          });
        }
        if (metronome) {
          setTimeout(function () {
            play();
          }, 100);
        }
        setActiveIndex((prev) => prev + 1);
      }
    },
    runInterval ? timing : null
  );

  console.log("noteTray", { notesToPlay: notesToPlay.length });
  return (
    <div className={classes.scrollAreaWrapper}>
      <Paper
        elevation={4}
        className={classes.scrollArea}
        ref={songContainerRef}
      >
        <div className={classes.songContainer}>
          <NotesArray notesToPlay={notesToPlay} />
        </div>
      </Paper>

      <div className={classes.inActiveBox} />
    </div>
  );
}

export default React.memo(NoteTray);
