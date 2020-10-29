import { AccordionActions } from "@material-ui/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

interface CounterState {
  list: string[];
}

const initialState: CounterState = {
  list: ["jim"],
};

export const counterSlice = createSlice({
  name: "symbolList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload) {
        const index = state.list.indexOf(action.payload);
        if (index === -1) {
          state.list.push(action.payload);
          state.list.sort();
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      console.log("1", { pay: action.payload });
      if (action.payload) {
        const index = state.list.indexOf(action.payload);
        if (index !== -1) {
          console.log({ pay: action.payload, index });
          state.list.splice(index, 1);
        }
      }
    },
  },
});

export const { add, remove } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch: any) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSymbolList = (state: RootState) => state.symbolList.list;

export default counterSlice.reducer;
