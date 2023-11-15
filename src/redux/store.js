import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksReducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
    // Add more reducers if needed
  },
  // add you middleware here if you need
});

export default store;
