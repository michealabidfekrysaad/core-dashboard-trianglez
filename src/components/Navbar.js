import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { UserContext } from "../config/providers/UserProvider/UserProvider";

const useStyles = makeStyles((theme) => ({
  customButton: {
    textTransform: "initial !important",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const { logout, User } = useContext(UserContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <nav className="nav">
      <div className="head">Acore admin dashboard</div>
      <div>
        <Button
          color="inherit"
          onClick={handleOpenUserMenu}
          className={classes.customButton}
        >
          Super Admin
        </Button>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{User?.email}</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              logout();
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">logout</Typography>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};
