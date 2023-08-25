import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import styles from "../post.module.css";

import { usePosts } from "../../../context/post-context/post-context";

const LikeIcon = ({ likesCount, isLikedByUser, postId }) => {
  const [hover, setHover] = useState(false);
  const onHoverHandler = () => setHover(!hover);
  const { likePost, dislikePost } = usePosts();

  const likeDislikeHandler = () => {
    if (isLikedByUser) {
      dislikePost(postId);
    } else {
      likePost(postId);
    }
  };

  return (
    <div
      className={`${styles.icon_container} group `}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
      onClick={likeDislikeHandler}
    >
      {hover || isLikedByUser ? (
        <span
          className={`p-2 rounded-full ${hover && "group-hover:bg-red-200"} `}
        >
          <AiFillHeart className={styles.likedIcon} />
        </span>
      ) : (
        <span className={styles.likeIcon_wrapper}>
          <AiOutlineHeart className={styles.icon} />
        </span>
      )}
      <span
        className={` ${
          isLikedByUser && "text-red-600"
        } group-hover:text-red-600 `}
      >
        {likesCount}
      </span>
    </div>
  );
};

const CommentIcon = ({ commentCount }) => {
  const [hover, setHover] = useState(false);

  const onHoverHandler = () => {
    setHover(!hover);
  };

  return (
    <>
      <div
        className={`${styles.icon_container} group `}
        onMouseEnter={onHoverHandler}
        onMouseLeave={onHoverHandler}
      >
        <span className=" p-2 rounded-full group-hover:bg-green-200 group-hover:text-green-800 ">
          <FaRegComment className={styles.icon} />
        </span>
        <span className=" group-hover:text-green-800 ">{commentCount}</span>
      </div>
    </>
  );
};

const BookmarkIconComp = ({ postId }) => {
  const [hover, setHover] = useState(false);

  const {
    bookmarkPost,
    removeBookmarkPost,
    posts: { bookmarks }
  } = usePosts();

  const isBookmarked = bookmarks.find((ele) => ele._id === postId);

  const bookmarkBtnHandler = () => {
    if (isBookmarked) {
      removeBookmarkPost(postId);
    } else {
      bookmarkPost(postId);
    }
  };

  const onHoverHandler = () => {
    setHover(!hover);
  };
  return (
    <div
      className={`${styles.icon_container} group `}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
      onClick={bookmarkBtnHandler}
    >
      <span className=" p-2 rounded-full group-hover:bg-green-200 group-hover:text-green-800 ">
        {isBookmarked ? (
          <>
            <BsFillBookmarkFill className=" text-green-800 " />
          </>
        ) : (
          <FaRegBookmark className={styles.icon} />
        )}
      </span>
    </div>
  );
};

const PostIcons = ({ likes, comments, _id, isLikedByUser }) => {
  const likesCount = likes?.likeCount ? likes?.likeCount : 0;
  const commentCount = comments?.length;

  return (
    <div className="flex items-center justify-between py-1">
      <div className=" flex items-center gap-5 ">
        <LikeIcon
          likesCount={likesCount}
          postId={_id}
          isLikedByUser={isLikedByUser}
        />
        <CommentIcon commentCount={commentCount} />
        <div className=" flex items-center text-xl gap-1 ">
          <AiOutlineShareAlt className={styles.icon} />
        </div>
      </div>
      <BookmarkIconComp postId={_id} />
    </div>
  );
};

export default PostIcons;
