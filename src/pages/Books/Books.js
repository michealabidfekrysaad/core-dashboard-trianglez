/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../../components/ButtonCustom";
import { PATH_PAGE } from "../../routes/paths";
import { BooksTable } from "./BooksTable";
import debounce from "lodash/debounce";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { searchBook } from "../../redux/reducers/booksReducer";

const useStyles = makeStyles({
  input: {
    "& .MuiOutlinedInput-root": {
      height: "35px",
      border: "none",
      "&:hover $notchedOutline": {
        border: "none",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 12px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

export const Books = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      setRowsPerPage(5);
      setPage(0);
      dispatch(searchBook({ searchValue }));
    }, 500),
    []
  );

  useEffect(() => {
    return () => {
      //  return the search result to empty to show all books
      dispatch(searchBook({ searchValue: "" }));
    };
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    debouncedSearch(value);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Books
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <TextField
          variant="outlined"
          placeholder="search"
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            className: classes.input,
            style: { backgroundColor: "white" },
          }}
        />
        <ButtonCustom
          text="Add Book"
          hasIcon="+"
          onClick={() => navigate(PATH_PAGE.booksAdd)}
        />
      </Grid>
      <Grid item xs={12}>
        <BooksTable
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </Grid>
    </Grid>
  );
};
