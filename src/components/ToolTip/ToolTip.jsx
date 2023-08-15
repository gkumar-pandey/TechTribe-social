import React from "react";
import styles from "./tooltip.module.css";

const ToolTip = ({ children, text }) => {
  return (
    <div>
      <div className={styles.tooltip}>
        {children}
        <span className={styles.tooltiptext}>{text}</span>
      </div>
    </div>
  );
};

export default ToolTip;
