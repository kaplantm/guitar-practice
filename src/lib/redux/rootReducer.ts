import { combineReducers } from "@reduxjs/toolkit";
import symbolListReducer from "./slices/symbolListSlice";

const rootReducer = combineReducers({
  symbolList: symbolListReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
