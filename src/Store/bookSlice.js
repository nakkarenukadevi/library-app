import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    search: {
      searchparam: "",
      books: [],
    },
  },
  reducers: {
    addBooks: (state, action) => {
      state.books = action.payload;
    },
    searchBooks: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { addBooks, searchBooks } = bookSlice.actions;
export default bookSlice.reducer;
