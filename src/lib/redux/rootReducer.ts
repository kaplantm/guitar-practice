import { combineReducers } from "@reduxjs/toolkit";
import stockReducer from "./slices/stockSlice";

const rootReducer = combineReducers({
  stocks: stockReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
