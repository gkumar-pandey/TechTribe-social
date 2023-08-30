import React from "react";
import styles from "../auth.module.css";
import { Container, SignUpForm } from "../../../components";
import { useAuth } from "../../../context";
import { BiErrorCircle } from "react-icons/bi";
import SocialMediaAnimation from "../component/SocialMediaAnimation";

const SignUpPage = () => {
  const { signupFormData } = useAuth();
  return (
    <div className={styles.auth_container}>
      <Container>
        <div className={styles.container}>
          <SocialMediaAnimation />
          <div className="flex items-center justify-center">
            <div className={styles.wrapper}>
              <div className="my-6">
                <h2 className={styles.title}>Signup TechTribe</h2>
              </div>
              <SignUpForm />
              {signupFormData?.validationErr && (
                <div className="text-clip text-red-700 font-semibold flex items-start">
                  <span>
                    <BiErrorCircle className="text-2xl px-1" />{" "}
                  </span>
                  <span>{signupFormData.validationErr}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;
