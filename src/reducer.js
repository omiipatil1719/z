import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./slice";

export const rootReducer = combineReducers({
    todo: todoSlice.reducer
});
