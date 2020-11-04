import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NotesState {
  list: string[];
  bpm: number;
  minutes: number;
  metronome: boolean;
}

const initialState: NotesState = {
  list: ["A", "D", "E"],
  bpm: 45,
  minutes: 1,
  metronome: false,
};

export const stockSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const note = action?.payload;
      if (note && typeof note === "string") {
        const index = state.list.indexOf(note);
        if (index === -1) {
          state.list.push(action.payload);
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const note = action?.payload;
      if (note) {
        const index = state.list.indexOf(note);
        if (index !== -1) {
          state.list.splice(index, 1);
        }
      }
    },
    setBPM: (state, action: PayloadAction<number>) => {
      const bpm = action?.payload;
      if (!bpm) {
        state.bpm = 60;
      }
      if (bpm > 10 && bpm <= 150) {
        state.bpm = bpm;
      }
    },
    setMinutes: (state, action: PayloadAction<number>) => {
      const minutes = action?.payload;
      if (!minutes) {
        state.minutes = 1;
      }
      if (minutes > 0 && minutes <= 5) {
        state.minutes = minutes;
      }
    },
    setMetronome: (state, action: PayloadAction<boolean>) => {
      state.metronome = action.payload;
    },
  },
});

export const {
  add,
  remove,
  setBPM,
  setMinutes,
  setMetronome,
} = stockSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNotes = (state: RootState) => state.notes.list;
export const selectBPM = (state: RootState) => state.notes.bpm;
export const selectMinutes = (state: RootState) => state.notes.minutes;
export const selectMetronome = (state: RootState) => state.notes.metronome;
export const selectAllNotesSlice = (state: RootState) => state.notes;

// TODO: fix naming
export default stockSlice.reducer;
