import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});
export const { addBooks } = bookSlice.actions;
export default bookSlice.reducer;
