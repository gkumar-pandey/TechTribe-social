import { useContext, useEffect, useReducer, useState } from "react";
import {
  signupReducer,
  loginReducer,
  signupInitialState,
  loginInitialState
} from "../../reducer";
import { loginValidation, signupValidation } from "../../utils";
import { loginService, signupService } from "../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  CurrUserInitialState,
  CurrUserReducer
} from "../../reducer/user-reducer/user-reducer";
import { RESET, SET_CURR_USER } from "../../reducer/actions/actions";

const { createContext } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signupFormData, dispatchSignUpForm] = useReducer(
    signupReducer,
    signupInitialState
  );
  const [loginFormData, dispatchLoginForm] = useReducer(
    loginReducer,
    loginInitialState
  );
  const [currUserState, dispatchCurrUser] = useReducer(
    CurrUserReducer,
    CurrUserInitialState
  );
  const [token, setToken] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    const isValid = signupValidation(signupFormData, dispatchSignUpForm);
    if (isValid) {
      await signupService(
        signupFormData,
        navigate,
        setIsLoading,
        dispatchCurrUser
      );
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const isValid = loginValidation(loginFormData, dispatchLoginForm);
    if (isValid) {
      await loginService(
        loginFormData,
        dispatchLoginForm,
        dispatchCurrUser,
        setIsLoading,
        navigate
      );
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    dispatchCurrUser({ type: RESET });
    navigate("/login");
    toast.success("Logout successfully");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const { user, token } = JSON.parse(localStorage.getItem("user"));
      dispatchCurrUser({ type: SET_CURR_USER, payload: user });
      setToken(token);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signupFormData,
        dispatchSignUpForm,
        signupHandler,
        loginFormData,
        dispatchLoginForm,
        loginHandler,
        isLoading,
        setIsLoading,
        logoutHandler,
        currUserState,
        dispatchCurrUser,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
