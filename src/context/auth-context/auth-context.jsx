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

  const [currUser, setCurrUser] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    const isValid = signupValidation(signupFormData, dispatchSignUpForm);
    if (isValid) {
      await signupService(signupFormData, navigate, setIsLoading, setCurrUser);
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
        setCurrUser,
        setIsLoading,
        navigate
      );
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    setCurrUser("");
    navigate("/login");
    toast.success("Logout successfully");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const { user, token } = JSON.parse(localStorage.getItem("user"));
      setCurrUser(user);
      setToken(token);
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        currUser,
        setCurrUser,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
