import axios from "axios";
import {
  ADD_TO_BOOKMARK,
  SET_ALL_POSTS,
  SET_BOOKMARK_POSTS,
  SET_FEED_POSTS,
  UPDATE_POSTS
} from "../../reducer/actions/actions";

export const getPostsByUserName = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

export const getAllPosts = async (dispatchPosts) => {
  try {
    const { data, status } = await axios.get("/api/posts");

    if (status === 200) {
      dispatchPosts({ type: SET_ALL_POSTS, payload: data?.posts });
      dispatchPosts({ type: SET_FEED_POSTS, payload: data?.posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const likePostService = async (postId, token, dispatchPosts) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 201) {
      dispatchPosts({ type: SET_ALL_POSTS, payload: data?.posts });
      dispatchPosts({ type: SET_FEED_POSTS, payload: data?.posts });
      dispatchPosts({ type: UPDATE_POSTS, payload: data?.posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const dislikePostService = async (postId, token, dispatchPosts) => {
  try {
    const { data, status } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 201) {
      dispatchPosts({ type: SET_ALL_POSTS, payload: data?.posts });
      dispatchPosts({ type: SET_FEED_POSTS, payload: data?.posts });
      dispatchPosts({ type: UPDATE_POSTS, payload: data?.posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const bookmarkService = async (postId, token, dispatchPosts) => {
  try {
    const { data, status } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    );
    if (status) {
      dispatchPosts({ type: ADD_TO_BOOKMARK, payload: data?.bookmarks });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarksService = async (
  setIsLoading,
  token,
  dispatchPosts
) => {
  setIsLoading(true);
  try {
    const { data, status } = await axios.get(
      `/api/users/bookmark/`,

      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 200) {
      dispatchPosts({ type: SET_BOOKMARK_POSTS, payload: data?.bookmarks });
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

export const removeFromBookmarksService = async (
  postId,
  token,
  dispatchPosts
) => {
  try {
    const { data, status } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    );
    if (status) {
      dispatchPosts({ type: SET_BOOKMARK_POSTS, payload: data?.bookmarks });
    }
  } catch (error) {
    console.log(error);
  }
};

export const uploadPostService = async (post, token, dispatchPosts) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts`,
      { postData: post },
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status) {
      dispatchPosts({ type: SET_ALL_POSTS, payload: data?.posts });
    }
  } catch (error) {
    console.log(error);
  }
};

//** delete user post **/

export const deleteUserPostService = async (postId, token, dispatchPosts) => {
  try {
    const { status, data } = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token
      }
    });
    if (status === 201) {
      dispatchPosts({ type: SET_ALL_POSTS, payload: data?.posts });
      dispatchPosts({ type: UPDATE_POSTS, payload: data?.posts });
      dispatchPosts({ type: SET_FEED_POSTS, payload: data?.posts });
    }
  } catch (error) {
    console.log(error);
  }
};

// ** Update user posts **/

export const editPostService = async (
  postId,
  token,
  postData,
  dispatchPosts
) => {
  try {
    const { data, status } = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      { headers: { authorization: token } }
    );

    if (status) {
      dispatchPosts({ type: SET_ALL_POSTS, payload: data?.posts });
      dispatchPosts({ type: SET_FEED_POSTS, payload: data?.posts });
      dispatchPosts({ type: UPDATE_POSTS, payload: data?.posts });
    }
  } catch (error) {
    console.log(error);
  }
};
