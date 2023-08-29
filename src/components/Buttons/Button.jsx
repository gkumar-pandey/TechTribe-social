import React from "react";
import styles from "./button.module.css";

const Button = ({ BtnType, type, children, onClick }) => {
  if (BtnType === "solid") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.solid_btn} solid-btn `}
      >
        {children}
      </button>
    );
  } else if (BtnType === "outlined") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.outlined_btn} outline-btn `}
      >
        {children}
      </button>
    );
  }
};

export default Button;
