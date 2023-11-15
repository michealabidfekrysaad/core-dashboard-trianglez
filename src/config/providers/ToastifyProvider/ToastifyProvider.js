import React from "react";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

const ToastifyProvider = ({ children }) => {
  return (
    <>
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        position="top-center"
        newestOnTop
        pauseOnFocusLoss={false}
        draggable
      />
      {children}
    </>
  );
};

ToastifyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ToastifyProvider;
