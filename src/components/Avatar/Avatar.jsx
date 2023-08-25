import React from "react";
import styles from "./avatar.module.css";

const Avatar = ({ image, alt, size }) => {
  let avatarSizeClass = styles.sm;

  if (size === "xl") {
    avatarSizeClass = styles.xl;
  } else if (size === "md") {
    avatarSizeClass = styles.md;
  }

  return (
    <img
      className={`${styles.avatar} ${avatarSizeClass}`}
      src={image}
      alt={alt}
    />
  );
};

export default Avatar;
