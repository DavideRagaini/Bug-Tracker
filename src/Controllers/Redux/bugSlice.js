import { createSlice } from "@reduxjs/toolkit";
import { retriveBugs } from "../bugController";

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducer: {
    getBugs: (state) => retriveBugs(),
    // getBugs: (state) => {},
    createBugs: (state, actions) => {},
    updateBugs: (state, actions) => {},
    markComplete: (state, actions) => {},
  },
});

export default slice.reducer;

export const { getBugs, createBugs, updateBugs, markComplete } = slice.actions;
