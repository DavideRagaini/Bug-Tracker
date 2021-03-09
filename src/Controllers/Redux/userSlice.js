import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "X" });
      state.push({ name: "Y" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.action;