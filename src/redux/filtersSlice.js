import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },

  reducers: {
    aaa(state, action) {
      state.name += action.payload;
    },
    bbb(state, action) {
      state.name -= action.payload;
    },
  },
});

export const { aaa, bbb } = slice.actions;

export default slice.reducer;
