/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { addBook } from "../../redux/reducers/booksReducer";
import { PATH_PAGE } from "../../routes/paths";
import { DataInputs } from "./DataInputs";
import { DataConfirm } from "./DataConfirm";

const useStyles = makeStyles({
  background: {
    borderRadius: "10px",
    minHeight: "60vh",
    background: "white",
    padding: "30px",
  },
});

export const BookEdit = () => {
  const { id } = useParams();

  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      title: "",
      author: "",
      category: "",
      price: "",
      PDF: "",
      photo: "",
      version: "",
      olderVersion: "",
      edition: "",
      ISBN: "",
      releaseDate: "",
      brief: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(
      addBook({
        ...data,
        id: +books?.length + 1,
        pagesNum: "1000",
        hoursRead: "7h",
        photo: imagePreview,
        PDF: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      })
    );
    navigate(PATH_PAGE.books);
    if (!id) {
      toast.success("Added successfully");
    }
  };

  useEffect(() => {
    if (watch("photo")) {
      const reader = new FileReader();
      const file = Object.values(watch("photo"))[0];
      console.log(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }, [watch, watch("photo")]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Edit Book
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.background}>
            <Grid container spacing={3}>
              <Grid xs={6} item>
                <DataInputs
                  register={register}
                  errors={errors}
                  control={control}
                  setValue={setValue}
                  clearErrors={clearErrors}
                  watch={watch}
                />
              </Grid>

              <Grid xs={6} item>
                <DataConfirm
                  imagePreview={imagePreview}
                  register={register}
                  errors={errors}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
