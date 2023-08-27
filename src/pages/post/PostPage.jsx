import React, { useEffect, useState } from "react";
import PostDetails from "../../components/Post/PostDetails";
import { useScrollToTop } from "../../hooks";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postDetails, setPostDetails] = useState("");
  useScrollToTop();
  const { postId } = useParams();

  const fetchPostDetails = async () => {
    try {
      const { data, status } = await axios.get(`/api/posts/${postId}`);
      if (status) {
        setPostDetails(data?.post);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);
  return (
    <div>
      <PostDetails postDetails={postDetails} setPostDetails={setPostDetails} />
    </div>
  );
};

export default PostPage;
