import { isFollowing } from "../../utils";
import {
  SET_SUGGESTED_USER,
  SET_OTHER_USER,
  UPDATE_OTHER_USER,
  FOLLOW
} from "../actions/actions";

export const userInitialState = {
  otherUser: "",
  suggestedUsers: []
};

const currUser = JSON.parse(localStorage.getItem("user"))?.user;

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SUGGESTED_USER:
      return {
        ...state,
        suggestedUsers: payload
          .filter(
            (item) =>
              item?._id !== currUser?._id &&
              !isFollowing(currUser?.following, item?._id)
          )
          .slice(0, 6)
      };
    case SET_OTHER_USER:
      return {
        ...state,
        otherUser: { ...payload }
      };
    case FOLLOW:
      return {
        ...state,
        otherUser: { ...payload }
      };
    case UPDATE_OTHER_USER:
      if (state.otherUser._id === payload._id) {
        return { ...state, otherUser: { ...payload.followUser } };
      } else {
        return { ...state, otherUser: { ...payload.user } };
      }
    default:
      return state;
  }
};
