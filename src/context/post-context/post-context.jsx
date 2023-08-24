import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";

import { useAuth } from "../auth-context/auth-context";
import { PostsReducer, postsInitialState } from "../../reducer";
import { getAllPosts, likePostService } from "../../services";
import {
  bookmarkService,
  deleteUserPostService,
  dislikePostService,
  removeFromBookmarksService
} from "../../services/post-service/post-service";
import { sortPosts } from "../../utils";

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(PostsReducer, postsInitialState);
  const [filters, setFilters] = useState({
    sortBy: "RECENT",
    search: ""
  });
  const { currUser, token } = useAuth();

  const filtersHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters((pre) => ({ ...pre, [name]: value }));
  };

  const fetchAllPosts = async () => {
    await getAllPosts(dispatchPosts);
  };

  const likePost = async (postId) => {
    await likePostService(postId, token, dispatchPosts);
  };

  const dislikePost = async (postId) => {
    await dislikePostService(postId, token, dispatchPosts);
  };

  const bookmarkPost = async (postId) => {
    await bookmarkService(postId, token, dispatchPosts);
  };

  const removeBookmarkPost = async (postId) => {
    await removeFromBookmarksService(postId, token, dispatchPosts);
  };

  const deleteUserPost = async (postId) => {
    await deleteUserPostService(postId, token, dispatchPosts);
  };

  useEffect(() => {
    if (token) {
      fetchAllPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currUser]);

  const filterFeedPosts = () => {
    let postData = [...posts?.FeedPosts];
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
        filtersHandler,
        fetchAllPosts,
        likePost,
        dislikePost,
        bookmarkPost,
        dispatchPosts,
        removeBookmarkPost,
        deleteUserPost,
        feedPosts,
        token
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
