import { sortPosts } from "../../utils";
import { userFollowingPosts } from "../../utils/filters/filters";
import {
  ADD_TO_BOOKMARK,
  DELETE_USER_POST,
  SET_ALL_POSTS,
  SET_BOOKMARK_POSTS,
  SET_CURR_USER_POSTS,
  SET_FEED_POSTS,
  SET_OTHER_USER_POSTS,
  UPDATE_POSTS
} from "../actions/actions";

export const postsInitialState = {
  AllPosts: [],
  FeedPosts: [],
  ExplorePosts: [],
  BookmarksPosts: [],
  otherUserPosts: []
};

export const PostsReducer = (state, { type, payload }) => {
  const currUserState = JSON.parse(localStorage.getItem("user")).user;
  switch (type) {
    case SET_ALL_POSTS:
      return { ...state, AllPosts: sortPosts(payload, "RECENT") };
    case SET_FEED_POSTS:
      return {
        ...state,
        FeedPosts: userFollowingPosts(payload, currUserState)
      };
    case SET_BOOKMARK_POSTS:
      return { ...state, BookmarksPosts: payload };
    case ADD_TO_BOOKMARK:
      return {
        ...state,
        BookmarksPosts: [...payload, ...state.BookmarksPosts]
      };
    case SET_CURR_USER_POSTS:
      return {
        ...state,
        CurrUserPosts: payload.filter(
          (post) => post?.userId === currUserState?.userId
        )
      };
    case SET_OTHER_USER_POSTS:
      return { ...state, otherUserPosts: sortPosts(payload, "RECENT") };
    case UPDATE_POSTS:
      const updatedOtherUserPosts = payload.filter((ele) =>
        state.otherUserPosts.find(({ _id }) => _id === ele._id)
      );
      const updatedBookmarksPosts = payload.filter((ele) =>
        state.BookmarksPosts.find(({ _id }) => ele._id === _id)
      );
      return {
        ...state,
        otherUserPosts: sortPosts(updatedOtherUserPosts, "RECENT"),
        BookmarksPosts: sortPosts(updatedBookmarksPosts, "RECENT")
      };

    default:
      return state;
  }
};
