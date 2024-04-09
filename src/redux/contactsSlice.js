import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(state);
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
    },

    deleteContact: (state, action) =>
      state.items.filter((contact) => contact.id !== action.payload),
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
