import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import { iconPath } from "../constants/Constants";
import { PATH_PAGE } from "../routes/paths";

export const SideMenu = ({ setCollapse, collapse }) => {
  const path = iconPath();
  return (
    <>
      <div className="container">
        <img src={`${path}acore.jpg`} alt="logo" className="logo" />
        <div className="arrow" onClick={() => setCollapse(!collapse)}>
          {collapse ? "<" : ">"}
        </div>
      </div>
      <div
        className={`links ${
          useMatch(`${PATH_PAGE.books}/*`) ? "active-link" : ""
        }`}
      >
        <NavLink to={PATH_PAGE.books} className="nav-link">
          <img src={`${path}book.jpg`} alt="logo" />
          {collapse && "Books"}
        </NavLink>
      </div>
    </>
  );
};
