import axios from "axios";

export const getPostsByUserName = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

export const getAllPostsService = async () => {
  return await axios.get("/api/posts");
};

export const likeService = async (postId, token) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  );
};

export const dislikeService = async (postId, token) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  );
};

export const bookmarkService = async (postId, token) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  );
};

export const getBookmarksService = async (token) => {
  return await axios.get(
    `/api/users/bookmark/`,

    {
      headers: {
        authorization: token
      }
    }
  );
};

export const removeBookmarksService = async (postId, token) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  );
};

export const uploadPostService = async (post, token) => {
  return await axios.post(
    `/api/posts`,
    { postData: post },
    {
      headers: {
        authorization: token
      }
    }
  );
};

//** delete user post **/

export const deletePostService = async (postId, token) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token
    }
  });
};

// ** Update user posts **/

export const editPostService = async (postId, token, postData) => {
  return await axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    { headers: { authorization: token } }
  );
};

//** comment services */
export const commentService = async (postId, token, comment) => {
  return await axios.post(
    `/api/comment/${postId}`,
    { comment },
    { headers: { authorization: token } }
  );
};

export const editCommentService = async (
  postId,
  commentId,
  commentData,
  token
) => {
  return await axios.post(
    `/api/comment/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};

export const deleteCommentService = async (postId, commentId, token) => {
  return axios.delete(`/api/comment/delete/${postId}/${commentId}`, {
    headers: { authorization: token }
  });
};
