/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, editBook } from "../../redux/reducers/booksReducer";
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

export const BookAddEdit = () => {
  const { id } = useParams();

  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState("");
  const [pdfPreview, setPdfPreview] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const specificBook = books?.find((b) => +b?.id === +id);

  useEffect(() => {
    if (!specificBook && id) {
      navigate(PATH_PAGE.books);
      toast.success("Book ID not correct");
    }
  }, [specificBook, navigate, id]);

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

  useEffect(() => {
    if (specificBook) {
      setValue("title", specificBook?.title);
      setValue("author", specificBook?.author);
      setValue("category", specificBook?.category);
      setValue("price", specificBook?.price);
      setPdfPreview(specificBook?.PDF);
      setImagePreview(specificBook?.photo);
      setValue("version", specificBook?.version);
      setValue("olderVersion", specificBook?.olderVersion);
      setValue("edition", specificBook?.edition);
      setValue("ISBN", specificBook?.ISBN);
      setValue("releaseDate", specificBook?.releaseDate);
      setValue("brief", specificBook?.brief);
    }
  }, [specificBook]);

  const onSubmit = (data) => {
    if (id) {
      dispatch(
        editBook({
          id,
          updatedBookData: {
            ...data,
            id: id,
            pagesNum: "1000",
            hoursRead: "7h",
            photo: imagePreview,
            PDF: pdfPreview,
          },
        })
      );
    } else {
      dispatch(
        addBook({
          ...data,
          id: +books?.length + 1,
          pagesNum: "1000",
          hoursRead: "7h",
          photo: imagePreview,
          PDF: pdfPreview,
        })
      );
    }
    navigate(PATH_PAGE.books);
    if (!id) {
      toast.success("Added successfully");
    } else {
      toast.success("Updated successfully");
    }
  };

  useEffect(() => {
    if (watch("photo")) {
      const reader = new FileReader();
      const file = Object.values(watch("photo"))[0];
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }, [watch, watch("photo")]);

  useEffect(() => {
    if (watch("PDF") && Object?.values(watch("PDF"))[0]) {
      setPdfPreview({
        fileName: Object.values(watch("PDF"))[0]?.name,
        fileType: Object.values(watch("PDF"))[0]?.type,
      });
    }
  }, [watch, watch("PDF")]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            {id ? "Edit" : "Add"} Book
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
                  id={id}
                  pdfPreview={pdfPreview}
                />
              </Grid>

              <Grid xs={6} item>
                <DataConfirm
                  imagePreview={imagePreview}
                  register={register}
                  errors={errors}
                  id={id}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
