import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Input/Input";
import styles from "../LoginForm/login.module.css";
import Button from "../../Buttons/Button";
import { useAuth } from "../../../context";
import { SET_FORM_DATA } from "../../../reducer/actions/actions";

const SignUpForm = () => {
  const { dispatchSignUpForm, signupFormData, signupHandler, isLoading } =
    useAuth();

  const onChangeHandler = (e) => {
    dispatchSignUpForm({ type: SET_FORM_DATA, payload: e });
  };

  return (
    <div>
      <form onSubmit={signupHandler} className={styles.form}>
        <div className=" flex gap-2  ">
          <label className={`w-full  `}>
            First name
            <input
              className={styles.input}
              onChange={onChangeHandler}
              required
              value={signupFormData.firstName}
              placeholder="First Name"
              name="firstName"
            />
          </label>
          <label className={`w-full `}>
            Last name
            <input
              placeholder="Last Name "
              onChange={onChangeHandler}
              required
              name="lastName"
              value={signupFormData.lastName}
              className={styles.input}
            />
          </label>
        </div>

        <label className={styles.label}>
          Username{" "}
          <Input
            type={"text"}
            name={"username"}
            value={signupFormData.username}
            onChange={onChangeHandler}
            placeholder={"Username"}
          />
        </label>
        <label className={styles.label}>
          Email{" "}
          <Input
            type={"email"}
            name={"email"}
            value={signupFormData.email}
            onChange={onChangeHandler}
            placeholder={"abc@gmail.com"}
          />
        </label>
        <label className={styles.label}>
          Password{" "}
          <Input
            type={"password"}
            value={signupFormData.password}
            name={"password"}
            onChange={onChangeHandler}
            placeholder={"Password"}
          />
        </label>
        <label className={styles.label}>
          Confirm Password
          <Input
            type={"password"}
            value={signupFormData.confirmPassword}
            name={"confirmPassword"}
            onChange={onChangeHandler}
            placeholder={"Confirm password"}
          />
        </label>
        <Button type={"submit"} BtnType={"solid"}>
          {isLoading ? "Loading..." : "Signup"}
        </Button>
      </form>
      <div className="text-center my-1 ">
        Already have account ?{" "}
        <Link to={"/login"}>
          <span className={styles.bold_text}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
