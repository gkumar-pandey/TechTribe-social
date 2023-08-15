import axios from "axios";

import { toast } from "react-hot-toast";
import {
  SET_CURR_USER,
  SET_SUGGESTED_USER,
  SET_USERS
} from "../../reducer/actions/actions";

export const getAllUsers = async (dispatchUsers) => {
  try {
    const { data, status } = await axios.get(`/api/users`);
    if (status === 200) {
      dispatchUsers({ type: SET_USERS, payload: data.users });
      dispatchUsers({ type: SET_SUGGESTED_USER, payload: data.users });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUsersDetailsByUsername = async (
  userId,
  setState,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`/api/users/${userId}`);
    if (res?.status === 200) {
      setState(res?.data?.user);
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

export const followUserService = async (
  followUserId,
  token,
  dispatchCurrUser,
  setOtherUser
) => {
  try {
    const { data, status } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 200) {
      setOtherUser(data?.followUser);
      dispatchCurrUser({ type: SET_CURR_USER, payload: data?.user });
    }
  } catch (error) {
    console.log(error);
  }
};

export const UnfollowUserService = async (
  followUserId,
  token,
  dispatchCurrUser,
  setOtherUser
) => {
  try {
    const { data, status } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 200) {
      setOtherUser(data?.followUser);
      dispatchCurrUser({ type: SET_CURR_USER, payload: data?.user });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfile = async (
  userData,
  token,
  dispatchCurrUser,
  setOtherUser,
  setIsUploading,
  editProfileModalHandler
) => {
  setIsUploading(true);
  try {
    const res = await axios.post(
      `/api/users/edit`,
      { userData },
      {
        headers: {
          authorization: token
        }
      }
    );
    if (res?.status === 201) {
      dispatchCurrUser({ type: SET_CURR_USER, payload: res?.data?.user });
      setOtherUser(res?.data?.user);
      toast.success("profile updated successfully");
      setIsUploading(false);
      editProfileModalHandler();
    } else {
      toast.error("Something went wrong!");
      console.error("Something went wrong");
      setIsUploading(false);
    }
  } catch (error) {
    console.log(error);
    setIsUploading(false);
  }
};
