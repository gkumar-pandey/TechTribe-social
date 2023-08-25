import { createContext, useContext, useReducer } from "react";

import {
  followService,
  unfollowService,
  getAllUsersService
} from "../../services";
import { useAuth } from "../auth-context/auth-context";
import { userReducer, userInitialState } from "../../reducer";

import { toast } from "react-hot-toast";
import { FOLLOW, SET_SUGGESTED_USER } from "../../reducer/actions/actions";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, userInitialState);
  const { setCurrUser, token } = useAuth();

  const getAllUsers = async () => {
    try {
      const { data, status } = await getAllUsersService();
      if (status) {
        dispatchUser({ type: SET_SUGGESTED_USER, payload: data.users });
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const followHandler = async (userId) => {
    try {
      const { data, status } = await followService(userId, token);
      const user = data?.user;
      const followUser = data?.followUser;

      if (status === 200) {
        dispatchUser({ type: FOLLOW, payload: followUser });
        setCurrUser({ ...user });
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const unfollowHandler = async (userId) => {
    try {
      const { data, status } = await unfollowService(userId, token);
      const user = data?.user;
      const followUser = data?.followUser;

      if (status === 200) {
        dispatchUser({ type: FOLLOW, payload: followUser });
        setCurrUser({ ...user });
      }
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        dispatchUser,
        followHandler,
        unfollowHandler,
        getAllUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
