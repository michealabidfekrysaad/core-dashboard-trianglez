import { createSlice } from "@reduxjs/toolkit";
import { DefaultBooks } from "../../constants/Constants";

const initialState = {
  books: DefaultBooks,
  filteredBooks: DefaultBooks,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter(
        (booking) => booking.id !== action.payload.id
      );
      state.filteredBooks = state.filteredBooks.filter(
        (booking) => booking.id !== action.payload.id
      );
    },
    searchBook(state, action) {
      const { searchValue } = action.payload;
      state.filteredBooks = state.books.filter(
        (booking) =>
          booking?.title?.toLowerCase().includes(searchValue?.toLowerCase()) ||
          booking?.author?.toLowerCase().includes(searchValue?.toLowerCase())
      );
    },
  },
});

export const { addBook, removeBook, searchBook } = booksSlice.actions;
export default booksSlice.reducer;