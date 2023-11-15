import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ButtonCustom } from "../../components/ButtonCustom";
import { TextBox } from "../../components/TextBox";
import { UserContext } from "../../config/providers/UserProvider/UserProvider";
import { iconPath } from "../../constants/Constants";
import { PATH_PAGE } from "../../routes/paths";

export const Login = () => {
  const path = iconPath();
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(true);

  const { setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setUser({
      email: watch("email"),
    });
    localStorage.setItem(
      "coreAdmin",
      JSON.stringify({
        email: watch("email"),
      })
    );
    toast.success("login successfully");
    navigate(PATH_PAGE.books);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className="login">
        <Grid item xs={12} className="structure">
          <Grid container className="container">
            <Grid item md={6} xs={12} className="data-holder">
              <Typography variant="h6" component="h6" className="info">
                Please enter your email address and password to access your
                account
              </Typography>{" "}
              <Box mb={4} mt={5}>
                <TextBox
                  register={register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Please enter a valid email format",
                    },
                  })}
                  errors={errors}
                  name="email"
                />
              </Box>
              <Box mb={4} sx={{ position: "relative" }}>
                <TextBox
                  register={register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: `password at least 3 characters`,
                    },
                  })}
                  errors={errors}
                  name="password"
                  type={passwordType ? "password" : "text"}
                />
                <span
                  className="show-pass"
                  onClick={() => setPasswordType(!passwordType)}
                >
                  show
                </span>
              </Box>
              <Box mb={4} sx={{ display: "flex" }}>
                <ButtonCustom type="submit" text="Sign In" />
              </Box>
              <Box sx={{ display: "flex" }}>
                <img src={`${path}acore.jpg`} alt="logo" className="image" />
              </Box>
            </Grid>
            <Grid item md={6} xs={12} className="image-holder">
              <img src={`${path}login.jpg`} alt="login" loading="lazy" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
