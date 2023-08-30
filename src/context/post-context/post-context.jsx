import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";

import { useAuth } from "../auth-context/auth-context";
import {
  BOOKMARK_POST,
  DELETE_POST,
  DISLIKE_POST,
  LIKE_POST,
  PostsReducer,
  REMOVE_FROM_BOOKMARK,
  SET_ALL_POSTS,
  SET_BOOKMARK_POSTS,
  modalInitialState,
  modalReducer,
  postsInitialState
} from "../../reducer";
import {
  getAllPostsService,
  likeService,
  dislikeService,
  bookmarkService,
  commentService,
  deletePostService,
  getBookmarksService,
  removeBookmarksService,
  editCommentService,
  deleteCommentService
} from "../../services";
import { sortPosts } from "../../utils";
import { toast } from "react-hot-toast";

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(PostsReducer, postsInitialState);
  const [filters, setFilters] = useState({
    sortBy: "RECENT",
    search: ""
  });
  const [modal, dispatchModal] = useReducer(modalReducer, modalInitialState);
  const [editPostFormData, setEditPostFormData] = useState({
    _id: "",
    content: ""
  });
  const { currUser, token } = useAuth();

  const filtersHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters((pre) => ({ ...pre, [name]: value }));
  };

  const getAllPosts = async () => {
    try {
      const { data, status } = await getAllPostsService();
      if (status === 200) {
        dispatchPosts({ type: SET_ALL_POSTS, payload: data.posts });
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const likePost = async (postId) => {
    try {
      const { data, status } = await likeService(postId, token);
      if (status === 201) {
        dispatchPosts({ type: LIKE_POST, payload: data?.posts });
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const { data, status } = await dislikeService(postId, token);
      if (status === 201) {
        dispatchPosts({ type: DISLIKE_POST, payload: data.posts });
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const bookmarkPost = async (postId) => {
    try {
      const { data, status } = await bookmarkService(postId, token);

      if (status === 200) {
        dispatchPosts({ type: BOOKMARK_POST, payload: data.bookmarks });
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const removeBookmarkPost = async (postId) => {
    try {
      const { data, status } = await removeBookmarksService(postId, token);
      if (status === 200) {
        dispatchPosts({ type: REMOVE_FROM_BOOKMARK, payload: data.bookmarks });
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const getBookmarksPosts = async (setLoading) => {
    try {
      setLoading(true);
      const { data, status } = await getBookmarksService(token);
      if (status === 200) {
        dispatchPosts({ type: SET_BOOKMARK_POSTS, payload: data.bookmarks });
        setLoading(false);
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
      setLoading(false);
    }
  };

  const deleteUserPost = async (postId) => {
    try {
      const { data, status } = await deletePostService(postId, token);

      if (status === 201) {
        dispatchPosts({ type: DELETE_POST, payload: data.posts });
      }
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  const postComment = async (postId, comment) => {
    try {
      const { status, data } = await commentService(postId, token, comment);

      if (status === 201) {
        return data?.comments;
      }
    } catch (err) {
      console.error(err?.message);
      toast.error(err?.message);
    }
  };

  const editComment = async (postId, commentId, commentData) => {
    try {
      const { status, data } = await editCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      if (status === 201) {
        return data.comments;
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const deleteComment = async (postId, commentId) => {
    try {
      const { status, data } = await deleteCommentService(
        postId,
        commentId,
        token
      );
      if (status === 201) {
        return data?.comments;
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (token) {
      getAllPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currUser]);

  const filterFeedPosts = () => {
    let postData = [...posts?.feed];
    if (filters.sortBy) {
      return (postData = sortPosts(postData, filters?.sortBy));
    }
    return postData;
  };

  const feedPosts = filterFeedPosts();

  return (
    <PostsContext.Provider
      value={{
        posts,
        filters,
        likePost,
        feedPosts,
        dislikePost,
        bookmarkPost,
        dispatchPosts,
        deleteUserPost,
        filtersHandler,
        getBookmarksPosts,
        removeBookmarkPost,
        modal,
        dispatchModal,
        editPostFormData,
        setEditPostFormData,
        postComment,
        editComment,
        deleteComment
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
