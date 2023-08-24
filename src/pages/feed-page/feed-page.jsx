import React, { useState } from "react";

import {
  FeedPostBtn,
  Modal,
  Post,
  PostForm,
  PostModalTitle,
  PostsShimmerLoader,
  SortComp
} from "../../components";
import { useAuth, usePosts } from "../../context";
import { useScrollToTop } from "../../hooks";

const FeedPage = () => {
  const { currUser } = useAuth();
  const [postFormModalOpen, setPostFormModal] = useState(false);
  const { posts, feedPosts } = usePosts();
  useScrollToTop();

  const togglePostFormModal = () => {
    setPostFormModal(!postFormModalOpen);
  };

  const renderPosts = () => {
    if (!posts?.FeedPosts?.length) {
      return [...Array(6)].map((_, idx) => <PostsShimmerLoader key={idx} />);
    }

    return feedPosts.map((postData) => (
      <Post key={postData._id} {...postData} />
    ));
  };

  return (
    <div>
      <FeedPostBtn user={currUser} togglePostFormModal={togglePostFormModal} />
      <SortComp />
      <div>{renderPosts()}</div>
      <Modal
        title={<PostModalTitle />}
        onClose={togglePostFormModal}
        isOpen={postFormModalOpen}
      >
        <PostForm />
      </Modal>
    </div>
  );
};

export default FeedPage;
