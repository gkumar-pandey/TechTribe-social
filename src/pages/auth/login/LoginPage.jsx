import React from "react";
import { Container, LoginForm } from "../../../components";
import styles from "../auth.module.css";
import SocialMediaAnimation from "../component/SocialMediaAnimation";

const LoginPage = () => {
  return (
    <div className={styles.auth_container}>
      <Container>
        <div className={styles.container}>
          <SocialMediaAnimation />
          <div className="flex items-center justify-center ">
            <div className={styles.wrapper}>
              <div className="my-6">
                <h2 className={styles.title}>
                  Login to <span>TechTribe</span>
                </h2>
                <p className={styles.text}>Connect with peoples</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
