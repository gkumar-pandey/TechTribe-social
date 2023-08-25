import axios from "axios";
import { toast } from "react-hot-toast";
import { RESET_FORM } from "../../reducer/actions/actions";

export const loginService = async (loginFormData) => {
  return await axios.post(
    "/api/auth/login",
    JSON.stringify({
      ...loginFormData
    })
  );
};

// * Signup service function
export const signupService = async (
  signupFormData,
  navigate,
  setIsLoading,
  setCurrUser
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
      setCurrUser(createdUser);
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
