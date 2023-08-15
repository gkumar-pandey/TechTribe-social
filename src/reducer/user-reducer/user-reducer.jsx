import {
  SET_CURR_USER,
  SET_SUGGESTED_USER,
  SET_USERS
} from "../actions/actions";

export const UsersInitialState = {
  users: [],
  suggestedUsers: []
};

export const CurrUserInitialState = {};

export const UsersReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    case SET_SUGGESTED_USER:
      return {
        ...state,
        suggestedUsers: payload.slice(0, 6)
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
