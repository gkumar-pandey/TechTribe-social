import React from "react";
import styles from "./avatar.module.css";

const Avatar = ({ image, alt, size }) => {
  if (size === "xl") {
    return (
      <img className={`${styles.avatar} ${styles.xl} `} src={image} alt={alt} />
    );
  }
  if (size === "md") {
    return (
      <img className={`${styles.avatar} ${styles.md}`} src={image} alt={alt} />
    );
  }
  return (
    <img className={`${styles.avatar} ${styles.sm}`} src={image} alt={alt} />
  );
};

export default Avatar;
