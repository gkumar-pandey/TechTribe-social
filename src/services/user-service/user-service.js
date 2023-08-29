import axios from "axios";
import { toast } from "react-hot-toast";
import {
  EDIT_PROFILE_MODAL,
  SET_OTHER_USER
} from "../../reducer/actions/actions";

export const getAllUsersService = async () => {
  return await axios.get(`/api/users`);
};

export const getUsersDetailsByUsername = async (
  userId,
  dispatchUser,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const { status, data } = await axios.get(`/api/users/${userId}`);
    if (status === 200) {
      dispatchUser({ type: SET_OTHER_USER, payload: data?.user });
      setIsLoading(false);
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
    setIsLoading(false);
  }
};

export const followService = async (followUserId, token) => {
  return await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  );
};

export const unfollowService = async (followUserId, token) => {
  return await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  );
};

export const updateUserProfile = async (userData, token) => {
  return await axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: {
        authorization: token
      }
    }
  );
};
