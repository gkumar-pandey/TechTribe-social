import { VALIDATION_ERROR } from "../../constant/authActions";

export const signupValidation = (data, dispatchSignUpForm) => {
  const { firstName, lastName, username, email, password, confirmPassword } =
    data;
  const isFirstNameValid = firstName !== "" && /^[A-Za-z\s]+$/.test(firstName);
  const isLastNameValid = lastName !== "" && /^[A-Za-z\s]+$/.test(lastName);
  const isUsernameValid =
    username !== "" && /^[a-zA-Z0-9_]{5,20}$/.test(username);
  const isEmailValid = email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    password !== "" && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  const isConfirmPasswordValid =
    confirmPassword !== "" && password === confirmPassword;

  if (!isFirstNameValid) {
    dispatchSignUpForm({
      type: VALIDATION_ERROR,
      payload: "Enter valid first name"
    });
    return;
  }

  if (!isLastNameValid) {
    dispatchSignUpForm({
      type: VALIDATION_ERROR,
      payload: "Enter valid last name"
    });
    return;
  }

  if (!isUsernameValid) {
    dispatchSignUpForm({
      type: VALIDATION_ERROR,
      payload:
        "username must have least 5 character with uppercase , lowercase, digit or underscore"
    });
  }

  if (!isEmailValid) {
    dispatchSignUpForm({
      type: VALIDATION_ERROR,
      payload: "Enter valid email"
    });
    return;
  }

  if (!isPasswordValid) {
    dispatchSignUpForm({
      type: VALIDATION_ERROR,
      payload:
        "Password must contain 6 character a uppercase,number and special character"
    });
    return;
  }

  if (!isConfirmPasswordValid) {
    dispatchSignUpForm({
      type: VALIDATION_ERROR,
      payload: "Password and confirm password not match"
    });
  }

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isConfirmPasswordValid &&
    isPasswordValid &&
    isUsernameValid
  );
};

//**Login form Validation */

export const loginValidation = (data, dispatchLoginForm) => {
  const { username, password } = data;

  const isUserNameValid = username !== "";
  const isPasswordValid = password !== "";

  if (!isPasswordValid) {
    dispatchLoginForm({
      type: VALIDATION_ERROR,
      payload: "Enter valid password"
    });
  }

  if (!isUserNameValid) {
    dispatchLoginForm({
      type: VALIDATION_ERROR,
      payload: "Enter valid username"
    });
  }

  return isUserNameValid && isPasswordValid;
};
