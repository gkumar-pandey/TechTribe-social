import { isFollowing } from "../../utils";
import {
  SET_CURR_USER,
  SET_SUGGESTED_USER,
  SET_USERS
} from "../actions/actions";

export const UsersInitialState = {
  users: [],
  suggestedUsers: []
};
const currUser = JSON.parse(localStorage.getItem("user"))?.user;
export const CurrUserInitialState = {};

export const UsersReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    case SET_SUGGESTED_USER:
      return {
        ...state,
        suggestedUsers: payload
          .filter(
            (item) =>
              item._id !== currUser._id &&
              !isFollowing(currUser.following, item._id)
          )
          .slice(0, 6)
      };
    default:
      return state;
  }
};

export const CurrUserReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURR_USER:
      return { ...payload };
    default:
      return state;
  }
};
