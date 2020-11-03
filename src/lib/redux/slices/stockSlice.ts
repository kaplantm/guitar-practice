import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DataPointKeysType,
  DataPointType,
  SymbolType,
} from "../../constants/types";
import * as finnhub from "../../../lib/finnhub/client";
import { generateSymbol } from "../../utils/symbolUtils";
import { AppThunk, RootState } from "../store";

interface StockState {
  [key: string]: SymbolType;
}

const initialState: StockState = {
  AAPL: generateSymbol({ name: "AAPL" }),
};

export const stockSlice = createSlice({
  name: "stockSlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SymbolType>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const name = action?.payload?.name; // TODO: rename to symbol
      console.log({ name });
      if (name) {
        const oldValue = state.stocks ? state[name] : null;
        console.log({ oldValue });
        if (!oldValue) {
          state[name] = action.payload;
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const name = action?.payload; // TODO: rename to symbol
      if (name) {
        const oldValue = state.stocks ? state[name] : null;
        if (oldValue) {
          delete state[name];
        }
      }
    },
    setDataPoint: (state, action: PayloadAction<any>) => {
      // TODO: type
      const {
        symbol,
        key,
        ...rest
      }: { symbol: string; key: DataPointKeysType } & DataPointType<
        any
      > = action?.payload;
      if (symbol && key) {
        state[symbol].data[key] = rest;
      }
    },
  },
});

export const { add, remove, setDataPoint } = stockSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getDataPointThunk = (
  // TODO: might not need to be a thunk
  symbol: string,
  key: DataPointKeysType
): AppThunk => (dispatch: any, getState) => {
  console.log("******");
  const callback = (error: any, data: any, response: any) => {
    const attemptedAt = new Date().getTime();
    const prevData = getState().stocks[symbol]?.data;
    const lastUpdatedAt =
      prevData && prevData[key] ? prevData[key].updatedAt : 0;
    console.log("getDataPointThunk", { attemptedAt, lastUpdatedAt });
    if (attemptedAt - lastUpdatedAt > 3000 || attemptedAt === 0) {
      console.log("update", data, typeof data);
      // last update was more than three seconds ago
      dispatch(
        setDataPoint({
          key,
          symbol,
          error,
          data: JSON.parse(JSON.stringify(data)), // convert from class to plain object to make redux happy
          updatedAt: data && !error ? new Date().getTime() : lastUpdatedAt,
          attemptedAt,
        })
      );
    }
  };
  const getDataFunction = finnhub[key];
  console.log("getDataPointThunk", { key, symbol, getDataFunction });
  if (getDataFunction && symbol) {
    getDataFunction(symbol, callback);
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSymbols = (state: RootState) => state.stocks;
export const selectSymbol = (symbol: string) => (state: RootState) =>
  state.stocks[symbol];

export default stockSlice.reducer;
