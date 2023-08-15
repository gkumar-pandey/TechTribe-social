import React from "react";
import { LoginForm } from "../../../components";
import styles from "../auth.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="my-6">
          <h2 className={styles.heading}>
            Login to <span>TechTribe</span>
          </h2>
          <p className={styles.text}>Connect with peoples</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
