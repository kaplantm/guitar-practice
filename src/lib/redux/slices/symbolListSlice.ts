import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SymbolType } from "../../constants/types";
import { generateSymbol } from "../../utils/symbolUtils";
import { RootStateType } from "../rootReducer";
import { AppThunk, RootState } from "../store";

interface SymbolState {
  symbols: { [key: string]: SymbolType };
}

const initialState: SymbolState = {
  symbols: { AAPL: generateSymbol({ name: "AAPL" }) },
};

export const counterSlice = createSlice({
  name: "symbolList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SymbolType>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const name = action?.payload?.name;
      console.log({ name });
      if (name) {
        const oldValue = state.symbols ? state.symbols[name] : null;
        console.log({ oldValue });
        if (!oldValue) {
          state.symbols[name] = action.payload;
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const name = action?.payload;
      if (name) {
        const oldValue = state.symbols ? state.symbols[name] : null;
        if (oldValue) {
          delete state.symbols[name];
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
export const selectSymbols = (state: RootState) => state.symbolList.symbols; //TODO: rename symbolList

export default counterSlice.reducer;
