import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },

  reducers: {
    aaa(state, action) {
      state.items.push(action.payload);
    },
    bbb(state, action) {
      // state.items.push(action.payload);
    },
  },
});

export const { aaa, bbb } = slice.actions;

export default slice.reducer;
