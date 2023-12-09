import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";

const appStore = configureStore({
  reducer: {
    booksReducer: bookSlice,
  },
});
export default appStore;
