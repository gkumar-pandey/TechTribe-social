import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./post.module.css";
import PostTopSection from "./components/PostTopSection";
import PostContent from "./components/PostContent";
import PostIcons from "./components/PostIcons";
import PostMedia from "./components/PostMedia";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { isLikedByCurrUser } from "../../utils";

const Post = (props) => {
  const {
    content,
    _id,
    username,
    firstName,
    lastName,
    userId,
    profileImage,
    mediaUrl,
    likes,
    comments
  } = props;
  const { likedBy } = likes;
  const { currUser } = useAuth();

  const isLiked = isLikedByCurrUser(likedBy, currUser?._id);

  return (
    <div className={styles.post_container}>
      <div className="flex gap-2 w-full  ">
        <div>
          <Link to={`/profile/${userId}`}>
            <Avatar image={profileImage} />
          </Link>
        </div>
        <div className="w-full">
          <PostTopSection {...props} />
          <Link to={`/post/${_id}`}>
            <PostContent content={content} />
            {mediaUrl && <PostMedia mediaUrl={mediaUrl} />}
          </Link>
          <PostIcons
            _id={_id}
            likes={likes}
            comments={comments}
            isLikedByUser={isLiked}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
