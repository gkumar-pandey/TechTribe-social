import { sortPosts } from "../../utils";
import { userFollowingPosts } from "../../utils/filters/filters";
import {
  BOOKMARK_POST,
  DELETE_POST,
  DISLIKE_POST,
  LIKE_POST,
  REMOVE_FROM_BOOKMARK,
  SET_ALL_POSTS,
  SET_BOOKMARK_POSTS,
  SET_OTHER_USER_POSTS,
  ADD_NEW_POST,
  UPDATE_POST,
  POST_MODAL
} from "../actions/actions";

export const postsInitialState = {
  all: [],
  feed: [],
  explore: [],
  bookmarks: [],
  otherUserPosts: []
};

export const modalInitialState = {
  addPost: false,
  editPost: false
};

export const PostsReducer = (state, { type, payload }) => {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const updatedOtherUserPosts = payload.filter((ele) =>
    state.otherUserPosts.find(({ _id }) => _id === ele._id)
  );
  const updatedBookmarksPosts = payload.filter((ele) =>
    state.bookmarks.find(({ _id }) => ele._id === _id)
  );
  switch (type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        all: sortPosts(payload, "RECENT"),
        feed: userFollowingPosts(payload, currUser)
      };

    case LIKE_POST:
    case DISLIKE_POST:
      return {
        ...state,
        all: sortPosts(payload, "RECENT"),
        feed: userFollowingPosts(payload, currUser),
        otherUserPosts: updatedOtherUserPosts,
        bookmarks: updatedBookmarksPosts
      };
    case BOOKMARK_POST:
    case REMOVE_FROM_BOOKMARK:
    case SET_BOOKMARK_POSTS:
      return { ...state, bookmarks: [...payload] };
    case DELETE_POST:
    case ADD_NEW_POST:
    case UPDATE_POST:
      return {
        ...state,
        all: sortPosts(payload, "RECENT"),
        feed: userFollowingPosts(payload, currUser),
        otherUserPosts: updatedOtherUserPosts,
        bookmarks: updatedBookmarksPosts
      };
    case SET_OTHER_USER_POSTS:
      return { ...state, otherUserPosts: sortPosts(payload, "RECENT") };
    default:
      return state;
  }
};

export const modalReducer = (state, { type, payload }) => {
  switch (type) {
    case POST_MODAL:
      return { ...state, addPost: !state.addPost };
    default:
      return { ...state };
  }
};
