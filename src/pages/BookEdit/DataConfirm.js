import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { iconPath } from "../../constants/Constants";
import { makeStyles } from "@mui/styles";
import { ButtonCustom } from "../../components/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  },
});

export const DataConfirm = ({ imagePreview, register, errors }) => {
  const path = iconPath();
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box className="core-input" mb={4}>
        <div className="image-upload">
          <label className="upload-input" htmlFor="upload-input">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" width="200" />
            ) : (
              <img src={`${path}bookHolder.jpg`} alt="holder" width="200" />
            )}

            <div className="upload-icon">Upload Book Cover</div>
          </label>
          <input
            className="core-input__field"
            id="upload-input"
            type="file"
            accept=".jpeg, .jpg, .png"
            style={{ display: "none" }}
            {...register("photo", {
              required: "Image is required",
            })}
          />
          {errors.photo && (
            <span className="core-input__field-error">
              {errors.photo?.message}
            </span>
          )}
        </div>
      </Box>

      <Box sx={{ position: "relative" }} mb={4}>
        <textarea
          className="textAreaDefault"
          id="brief"
          name="brief"
          {...register("brief", {
            required: `Brief is required`,
            maxLength: {
              value: 800,
              message: `Brief at most 800 characters`,
            },
          })}
          placeholder="Book brief *"
        ></textarea>

        {errors.brief && (
          <span className="core-input__field-error-text-box">
            {errors.brief?.message}
          </span>
        )}
      </Box>
      <Box className={classes.footer}>
        <ButtonCustom
          text="cancel"
          className="grey"
          onClick={() => navigate(PATH_PAGE.books)}
        />
        <ButtonCustom type="submit" text="save" />
      </Box>
    </>
  );
};
