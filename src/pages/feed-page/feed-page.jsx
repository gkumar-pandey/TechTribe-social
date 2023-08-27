import React from "react";

import {
  FeedPostBtn,
  Post,
  PostsShimmerLoader,
  SortComp
} from "../../components";
import { useAuth, usePosts } from "../../context";
import { useScrollToTop } from "../../hooks";

const FeedPage = () => {
  const { currUser } = useAuth();
  const { posts, feedPosts } = usePosts();

  useScrollToTop();

  const renderPosts = () => {
    if (!posts?.feed?.length) {
      return [...Array(6)].map((_, idx) => <PostsShimmerLoader key={idx} />);
    }

    return feedPosts.map((postData) => (
      <Post key={postData._id} {...postData} />
    ));
  };

  return (
    <div>
      <FeedPostBtn user={currUser} />
      <SortComp />
      <div>{renderPosts()}</div>
    </div>
  );
};

export default FeedPage;
