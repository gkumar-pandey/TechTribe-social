import {
  RESET_FORM,
  SET_CURR_USER,
  SET_FORM_DATA,
  SET_TEST_USER,
  VALIDATION_ERROR
} from "../actions/actions";

export const loginInitialState = { username: "", password: "" };
export const signupInitialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export const signupReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_FORM_DATA:
      return { ...state, [payload.target.name]: payload.target.value };

    case VALIDATION_ERROR:
      return { ...state, validationErr: payload };

    default:
      return state;
  }
};

export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_FORM_DATA:
      return { ...state, [payload.target.name]: payload.target.value };

    case VALIDATION_ERROR:
      return { ...state, validationErr: payload };
    case SET_TEST_USER:
      return { ...payload };
    case RESET_FORM:
      return { username: "", password: "" };

    default:
      return state;
  }
};

export const currUserReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURR_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
