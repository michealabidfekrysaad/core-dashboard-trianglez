import React from "react";
import { NavLink } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";

export const NotFound = () => {
  return (
    <h1>
      this page not found try again later{' '}
      <NavLink to={PATH_PAGE.books} className="nav-link">
        go to main page
      </NavLink>
    </h1>
  );
};
