import axios from "axios";
import { toast } from "react-hot-toast";
import { RESET_FORM, SET_CURR_USER } from "../../reducer/actions/actions";

export const loginService = async (
  loginFormData,
  dispatchLoginForm,
  dispatchCurrUser,
  setIsLoading,
  navigate
) => {
  const { username, password } = loginFormData;

  try {
    const { status, data } = await axios.post(
      "/api/auth/login",
      JSON.stringify({
        username,
        password
      })
    );
    if (status === 200) {
      localStorage.setItem(
        "user",
        JSON.stringify({ user: data.foundUser, token: data.encodedToken })
      );

      dispatchCurrUser({ type: SET_CURR_USER, payload: data?.foundUser });
      dispatchLoginForm({ type: RESET_FORM });
      setIsLoading(false);
      toast.success("Login successfully");
      navigate("/");
    }
  } catch (error) {
    console.error(error?.message);
    setIsLoading(false);
    toast.error(error?.message);
  }
};

// * Signup service function
export const signupService = async (
  signupFormData,
  navigate,
  setIsLoading,
  dispatchCurrUser
) => {
  setIsLoading(true);
  try {
    const signupData = JSON.stringify({
      firstName: signupFormData.firstName,
      lastName: signupFormData.lastName,
      email: signupFormData.email,
      password: signupFormData.password,
      username: signupFormData.username
    });
    const { data, status } = await axios.post("/api/auth/signup", signupData);

    if (status === 201) {
      const { createdUser, encodedToken } = data;
      dispatchCurrUser({ type: SET_CURR_USER, payload: createdUser });
      setIsLoading(false);
      toast.success("Signup successfully");

      localStorage.setItem(
        "user",
        JSON.stringify({ user: createdUser, token: encodedToken })
      );
      navigate("/");
    }
  } catch (err) {
    setIsLoading(false);

    console.error(err?.message);
    toast.error(err?.response?.data?.errors[0]);
  }
};
