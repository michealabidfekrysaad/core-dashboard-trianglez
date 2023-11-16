import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextBox } from "../../components/TextBox";
import { categories, olderVersions } from "../../constants/Constants";

const useStyles = makeStyles({
  selectBox: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
});

export const DataInputs = ({
  register,
  errors,
  control,
  setValue,
  clearErrors,
  watch,
}) => {
  const classes = useStyles();

  return (
    <>
      {" "}
      <Box mb={4}>
        <TextBox
          register={register("title", {
            required: "Book title is required",
            minLength: {
              value: 3,
              message: `Book title at least 3 characters`,
            },
          })}
          errors={errors}
          name="title"
          specificHolder="Book title *"
        />
      </Box>
      <Box mb={4}>
        <TextBox
          register={register("author", {
            required: "Book author is required",
            minLength: {
              value: 3,
              message: `Book author at least 3 characters`,
            },
          })}
          errors={errors}
          name="author"
          specificHolder="Book author *"
        />
      </Box>
      <Box className={classes.selectBox} mb={4}>
        <select
          {...register("category", {
            required: `Category is requried`,
          })}
          control={control}
          name="category"
          className="sign-select selectInputDefault"
          onChange={(e) => {
            setValue("category", e?.target?.value);
            clearErrors("category");
          }}
        >
          <option value="">Categories *</option>
          {categories?.map((coun) => (
            <option key={coun?.id} value={coun?.name}>
              {coun?.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="core-input__field-error">
            {errors.category?.message}
          </span>
        )}
      </Box>
      <Box mb={4}>
        <TextBox
          register={register("price", {
            required: "Book price is required",
            pattern: {
              value: /^\d+(\.\d{1,2})?$/, // Validate up to 2 decimal places
              message: "Please enter a valid price",
            },
          })}
          errors={errors}
          name="price"
          specificHolder="Book price *"
        />
      </Box>
      <Box mb={4}>
        <div className="core-input">
          <label htmlFor="pdfInput" className="file-input-label">
            {watch("PDF") && Object?.values(watch("PDF"))[0]
              ? Object.values(watch("PDF"))[0]?.name
              : "Book Pdf"}
          </label>
          <input
            type="file"
            id="pdfInput"
            accept=".pdf"
            className="file-input"
            {...register("PDF", {
              required: "Please upload a PDF file",
            })}
          />{" "}
          {errors.PDF && (
            <span className="core-input__field-error">
              {errors.PDF?.message}
            </span>
          )}
        </div>
      </Box>
      <Box mb={4}>
        <TextBox
          register={register("version", {
            required: "Book version is required",
          })}
          errors={errors}
          name="version"
          specificHolder="Book version *"
        />
      </Box>
      <Box className={classes.selectBox} mb={4}>
        <select
          control={control}
          name="olderVersion"
          className="sign-select selectInputDefault"
          onChange={(e) => {
            setValue("olderVersion", e?.target?.value);
            clearErrors("olderVersion");
          }}
        >
          <option value="">older versions</option>
          {olderVersions?.map((versions) => (
            <option key={versions?.id} value={versions?.name}>
              {versions?.name}
            </option>
          ))}
        </select>
        {errors.olderVersion && (
          <span className="core-input__field-error">
            {errors.olderVersion?.message}
          </span>
        )}
      </Box>
      <Box mb={4}>
        <TextBox
          register={register("edition")}
          errors={errors}
          name="edition"
          specificHolder="Book edition"
        />
      </Box>
      <Box mb={4}>
        <TextBox
          register={register("ISBN", {
            required: "Book ISBN is required",
            validate: {
              maxLengthWithoutDashes: (value) => {
                const valueWithoutDashes = value.replace(/-/g, "");
                return (
                  valueWithoutDashes.length <= 13 ||
                  "ISBN must be at most 13 characters"
                );
              },
            },
            pattern: {
              value: /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/,
              message: "Please enter a valid ISBN",
            },
          })}
          errors={errors}
          name="ISBN"
          specificHolder="Book ISBN *"
        />
      </Box>
      <Box mb={4}>
        <div className="core-input">
          <input
            className="core-input__field"
            type="date"
            {...register("releaseDate")}
            placeholder="Book Release Date"
          />
          {errors.releaseDate && (
            <span className="core-input__field-error">
              {errors.releaseDate?.message}
            </span>
          )}
        </div>
      </Box>
    </>
  );
};
