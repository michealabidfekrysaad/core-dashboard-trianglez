import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { ButtonCustom } from "../../components/ButtonCustom";
import { removeBook } from "../../redux/reducers/booksReducer";
import { Modals } from "../../components/Modals";
import { PATH_PAGE } from "../../routes/paths";

const useStyles = makeStyles({
  background: {
    borderRadius: "10px",
    minHeight: "60vh",
    background: "white",
    padding: "30px",
  },
  container: {
    display: "flex",
    borderRadius: "10px",
    justifyContent: "space-between",
  },
  imgHolder: {
    display: "flex",
    gap: "30px",
    "& img": {
      width: "200px",
      height: "300px",
      borderRadius: "10px",
    },
  },
  dataRead: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    textAlign: "center",
    color: "grey",
    "& h5": {
      color: "#3D4D9E",
    },
  },
  category: {
    padding: "15px 20px",
    background: "#e3e3e3",
    color: "grey",
    borderRadius: "10px",
    textAlign: "center",
    width: "fit-content",
  },
});

export const BookDetails = () => {
  const { id } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const [selectedBookId, setSelectedBookId] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const specificBook = books?.find((b) => +b?.id === +id);

  useEffect(() => {
    if (!specificBook) {
      navigate(PATH_PAGE.books);
      toast.success("Book ID not correct");
    }
  }, [specificBook, navigate]);

  const handleDelete = (bookId) => {
    setSelectedBookId(bookId);
    setDeleteConfirmationOpen(true);
  };

  const confirmDelete = () => {
    dispatch(removeBook({ id: selectedBookId }));
    setDeleteConfirmationOpen(false);
    navigate(PATH_PAGE.books);
    toast.success("Deleted successfully");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Book Details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.background}>
          <Box className={classes.container}>
            <Box className={classes.imgHolder}>
              <img src={specificBook?.photo} alt="book-cover" />
              <Box>
                <Typography variant="h4" component="h4">
                  {specificBook?.title}
                </Typography>
                <Box className={classes.dataRead}>
                  <Box>
                    <Typography variant="h5" component="h5">
                      {specificBook?.pagesNum}
                    </Typography>
                    pages
                  </Box>
                  <Box>
                    <Typography variant="h5" component="h5">
                      {specificBook?.hoursRead}
                    </Typography>
                    To read
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ gap: "10px", display: "flex" }}>
              <ButtonCustom
                text="Delete"
                className="red"
                onClick={() => handleDelete(+id)}
              />
              <ButtonCustom
                text="Edit"
                onClick={() => navigate(`/books/edit/${+id}`)}
              />
            </Box>
          </Box>
          <Box
            className={classes.container}
            justifyContent="unset"
            gap={30}
            mt={4}
          >
            <Box sx={{ color: "grey" }}>
              <Typography variant="h6" component="h6">
                By: {specificBook?.author} | {specificBook?.releaseDate}
              </Typography>
              <Typography variant="h6" component="h6" sx={{ color: "#3D4D9E" }}>
                $ {specificBook?.price}{" "}
              </Typography>
              <Typography variant="h6" component="h6">
                ISBN: {specificBook?.ISBN}
              </Typography>
              <Typography variant="h6" component="h6">
                version: {specificBook?.version}
              </Typography>
              <Box className={classes.category}>{specificBook?.category}</Box>
            </Box>
            <Box>
              <Typography variant="h6" component="h6">
                Brief
              </Typography>
              <Typography sx={{ color: "grey" }} variant="h6" component="h6">
                {specificBook?.brief}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Modals
        deleteConfirmationOpen={deleteConfirmationOpen}
        setDeleteConfirmationOpen={setDeleteConfirmationOpen}
        confirmDelete={confirmDelete}
        title="Delete Book"
        content="Are you sure you want to delete this book?"
      />
    </Grid>
  );
};
