import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SymbolType } from "../../constants/types";
import { RootState } from "../store";

interface NotesState {
  list: string[];
  bpm: number;
  totalBeats: number;
}

const initialState: NotesState = {
  list: ["A", "D", "E"],
  bpm: 45,
  totalBeats: 120,
};

export const stockSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const note = action?.payload;
      if (note) {
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
          state.list.splice(2, 1);
        }
      }
    },
  },
});

export const { add, remove } = stockSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNotes = (state: RootState) => state.notes.list;
export const selectBPM = (state: RootState) => state.notes.bpm;
export const selectTotalBeats = (state: RootState) => state.notes.totalBeats;
export const selectAllNotesSlice = (state: RootState) => state.notes;

// TODO: fix naming
export default stockSlice.reducer;
