import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../config/providers/UserProvider/UserProvider";
import { PATH_PAGE } from "./paths";

const isAuthenticated = (User) => User?.email || false;

export const PrivateRoute = ({ path, element }) => {
  const { User } = useContext(UserContext);
  return isAuthenticated(User) ? <Outlet /> : <Navigate to={PATH_PAGE.login} />;
};

export const LoggedInUserRoute = ({ path, element }) => {
  const { User } = useContext(UserContext);
  return !isAuthenticated(User) ? (
    <Outlet />
  ) : (
    <Navigate to={PATH_PAGE.books} />
  );
};
