import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../../Input/Input";
import Button from "../../Buttons/Button";
import { useAuth } from "../../../context";
import { SET_FORM_DATA, SET_TEST_USER } from "../../../reducer/actions/actions";

const LoginForm = () => {
  const {
    loginFormData,
    dispatchLoginForm,
    loginHandler,
    isLoading,
    setIsLoading
  } = useAuth();

  const onChangeHandler = (e) => {
    dispatchLoginForm({ type: SET_FORM_DATA, payload: e });
  };

  const testUserHandler = () => {
    const guestUser = {
      username: "gautamkp078",
      password: "Shekhar@078"
    };
    dispatchLoginForm({ type: SET_TEST_USER, payload: guestUser });
  };
  return (
    <>
      <div className="my-2">
        <form onSubmit={loginHandler} className={styles.form}>
          <label className={styles.label}>
            Username
            <Input
              type="text"
              value={loginFormData.username}
              placeholder={"Enter your username"}
              name="username"
              onChange={onChangeHandler}
            />
          </label>
          <label className={styles.label}>
            Password
            <Input
              type={"password"}
              placeholder={"Enter your password"}
              name={"password"}
              value={loginFormData.password}
              onChange={onChangeHandler}
            />
          </label>

          <Button onClick={testUserHandler} BtnType="outlined" type="button">
            Login with test credential
          </Button>

          <Button BtnType="solid" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
        <div className="text-center my-1">
          Don't have account ?
          <Link to={"/signup"}>
            <span className={styles.bold_text}>signup</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
