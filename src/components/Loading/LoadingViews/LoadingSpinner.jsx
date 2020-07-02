import React from "react";
import spinner from "assets/images/spinner.svg";

const LoadingSpinner = ({ className }) => (
  <div className={`loading-spinner${className ? ` ${className}` : ""}`}>
    <img src={spinner} alt="spinner" />
  </div>
);

export default LoadingSpinner;
