import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../features/bookSlice";

export default configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});
