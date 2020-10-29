import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
