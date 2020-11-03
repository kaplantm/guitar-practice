import { combineReducers } from "@reduxjs/toolkit";
import stockReducer from "./slices/stockSlice";

const rootReducer = combineReducers({
  notes: stockReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
