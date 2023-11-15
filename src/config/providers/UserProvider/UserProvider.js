import React, { useState } from "react";
import PropTypes from "prop-types";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [User, setUser] = useState(
    JSON.parse(localStorage.getItem("coreAdmin")) || null
  );
  console.log(User);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("coreAdmin");
  };

  return (
    <UserContext.Provider value={{ User, setUser, logout }}>
      {React.Children.only(children)}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserProvider;
