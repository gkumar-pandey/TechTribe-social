import React, { useState } from "react";
import styles from "./input.module.css";
import { AiFillEye, AiFillEyeInvisible, AiOutlineSearch } from "react-icons/ai";

const Input = ({ type, name, onChange, placeholder, value }) => {
  const [showPass, setShowPass] = useState(false);

  if (type === "password") {
    return (
      <div className={styles.password}>
        <input
          type={showPass ? "text" : "password"}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.password_input}
          value={value}
          required
        />
        <button type="button" onClick={() => setShowPass(!showPass)}>
          {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className={styles.search}>
        <AiOutlineSearch className="p-1 text-3xl " />
        <input
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className={styles.search_input}
        />
      </div>
    );
  }
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        required
      />
    </>
  );
};

export default Input;
