import {
  Box,
  TextField,
  Paper,
  IconButton,
  Typography,
  Slider,
} from "@material-ui/core";
import { Add, HighlightOff, VolumeMute, VolumeUp } from "@material-ui/icons";
import clsx from "clsx";
import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  remove,
  selectAllNotesSlice,
  setBPM,
  setMinutes,
  setMetronome,
} from "../../lib/redux/slices/stockSlice";
import useStyles from "./useStyles";

export function SetupBar({ disabled }: { disabled: boolean }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const allNotesSlice = useSelector(selectAllNotesSlice);
  const { list: notesList, bpm = 60, minutes = 1, metronome } = allNotesSlice;

  const isValid = !!note;

  function onChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setNote(event?.target?.value);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(add(note));
    setNote("");
  }

  function removeNote(toRemove: string) {
    dispatch(remove(toRemove));
  }
  function updateBpm(event: any, val: number | number[]) {
    dispatch(setBPM(val as number));
  }
  function updateMinutes(event: any, val: number | number[]) {
    dispatch(setMinutes(val as number));
  }
  function handleToggleAudio(event: any) {
    dispatch(setMetronome(!metronome));
  }
  const defaultBpm = React.useMemo(() => bpm, []);
  const defaultMinutes = React.useMemo(() => minutes, []);

  return (
    <>
      <Paper
        square
        elevation={4}
        className={clsx(classes.sidebar, disabled && classes.fullDisabled)}
      >
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
          <Box display="flex" alignItems="center">
            <TextField
              InputProps={{
                classes: {
                  root: clsx(
                    classes.symbolInput,
                    disabled && classes.symbolInputDisabled
                  ),
                },
              }}
              disabled={disabled}
              id="outlined-basic"
              variant="outlined"
              onChange={onChange}
              value={note}
              placeholder="Add chord"
            />
            <IconButton
              className={classes.iconButton}
              classes={{ disabled: classes.iconButtonDisabled }}
              disabled={!isValid}
              type="submit"
            >
              <Add color="primary" fontSize="large" />
            </IconButton>
            <Typography color={disabled ? "secondary" : "primary"}>
              {disabled
                ? "Press stop to edit settings"
                : "Add chords you'd like to practice. Hit start to begin practicing."}
            </Typography>
          </Box>
        </form>

        <Box mt={3} display="flex" flexWrap="wrap">
          {notesList.map((item) => (
            <Box
              className={clsx(
                classes.symbolRow,
                disabled && classes.symbolRowDisabled
              )}
              key={item}
            >
              <IconButton
                disabled={disabled}
                className={clsx("trashButton", classes.trashButton)}
                onClick={(e: MouseEvent<any>) => {
                  e.stopPropagation();
                  removeNote(item);
                }}
              >
                <HighlightOff color="primary" fontSize="small" />
              </IconButton>

              <Typography color="primary">{item.toUpperCase()}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>
      <Paper
        square
        elevation={4}
        className={clsx(
          classes.sidebar,
          classes.sidebarLower,
          disabled && classes.fullDisabled
        )}
      >
        <Box display="flex" flex={1} alignItems="center">
          <Box display="flex" flex={1} m={3}>
            <Typography
              id="bpm-slider"
              variant="body1"
              className={classes.sliderLabel}
            >
              Notes per minute:
            </Typography>
            {/* TODO: fix color of valuee */}
            <Slider
              classes={{ root: classes.slider }}
              onChangeCommitted={updateBpm}
              defaultValue={defaultBpm}
              aria-labelledby="bpm-slider"
              valueLabelDisplay="auto"
              step={10}
              disabled={disabled}
              marks
              min={20}
              max={100}
            />
          </Box>
          <Box display="flex" flex={1} m={3}>
            <Typography
              id="minute-slider"
              variant="body1"
              className={classes.sliderLabel}
            >
              Practice length (minutes):
            </Typography>
            <Slider
              classes={{ root: classes.slider }}
              onChangeCommitted={updateMinutes}
              defaultValue={defaultMinutes}
              aria-labelledby="minute-slider"
              valueLabelDisplay="auto"
              step={0.5}
              disabled={disabled}
              marks
              min={0.5}
              max={5}
            />
          </Box>
          <Box m={3} display="flex" alignItems="center">
            <Typography variant="body1" className={classes.sliderLabel}>
              Metronome:
            </Typography>
            <IconButton onClick={handleToggleAudio}>
              {metronome ? (
                <VolumeUp className={classes.buttonIcon} />
              ) : (
                <VolumeMute className={classes.buttonIcon} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default React.memo(SetupBar);
