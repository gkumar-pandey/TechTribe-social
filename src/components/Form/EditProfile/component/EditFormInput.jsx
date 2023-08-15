import React from "react";
import styles from "../editform.module.css";

const EditFormInput = ({ label, placeholder, name, value, onChange }) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`${styles.input}`}
      />
    </label>
  );
};

export default EditFormInput;
