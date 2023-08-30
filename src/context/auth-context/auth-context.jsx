import {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext
} from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  signupReducer,
  loginReducer,
  signupInitialState,
  loginInitialState,
  RESET_FORM
} from "../../reducer";
import { loginValidation, signupValidation } from "../../utils";
import { loginService, signupService } from "../../services";

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
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = token;

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
      try {
        const { data, status } = await loginService(loginFormData);
        if (status === 200) {
          const { foundUser, encodedToken } = data;
          setCurrUser(foundUser);
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify(foundUser));
          localStorage.setItem("token", encodedToken);
          dispatchLoginForm({ type: RESET_FORM });
          setIsLoading(false);
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    setCurrUser("");
    navigate("/login");
    toast.success("Logout successfully");
  };

  useEffect(() => {
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");
      setCurrUser(user);
      setToken(token);
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
        token,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
