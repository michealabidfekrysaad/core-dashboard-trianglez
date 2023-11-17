import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { removeBook } from "../../redux/reducers/booksReducer";
import { Modals } from "../../components/Modals";

export const BooksTable = ({ page, setPage, setRowsPerPage, rowsPerPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { filteredBooks } = useSelector((state) => state.books);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleView = (id) => {
    navigate(`/books/details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/books/edit/${id}`);
  };

  const handleDelete = (bookId) => {
    setSelectedBookId(bookId);
    setDeleteConfirmationOpen(true);
  };

  const confirmDelete = () => {
    dispatch(removeBook({ id: selectedBookId }));
    setDeleteConfirmationOpen(false);
    toast.success("Deleted successfully");
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Book Title</TableCell>
            <TableCell>Book Category</TableCell>
            <TableCell>Book Author</TableCell>
            <TableCell>Book ISBN</TableCell>
            <TableCell>Book version</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredBooks
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((book, index) => (
              <TableRow key={index}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.ISBN}</TableCell>
                <TableCell>{book.version}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => handleView(book.id)}
                    style={{ color: "blue" }}
                  >
                    <Visibility />
                  </IconButton>
                  <IconButton
                    onClick={() => handleEdit(book.id)}
                    style={{ color: "green" }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(book.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredBooks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modals
        deleteConfirmationOpen={deleteConfirmationOpen}
        setDeleteConfirmationOpen={setDeleteConfirmationOpen}
        confirmDelete={confirmDelete}
        title="Delete Book"
        content="Are you sure you want to delete this book?"
      />
    </TableContainer>
  );
};
