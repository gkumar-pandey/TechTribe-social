import React from "react";
import styles from "../auth.module.css";
import { SignUpForm } from "../../../components";
import { useAuth } from "../../../context";
import { BiErrorCircle } from "react-icons/bi";

const SignUpPage = () => {
  const { signupFormData } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="my-6">
          <h2 className={styles.heading}>Signup TechTribe</h2>
          <p></p>
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
  );
};

export default SignUpPage;
