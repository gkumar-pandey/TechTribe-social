import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import { usePosts } from "../../../context";
import { useCopyCurrentLink } from "../../../hooks";
import styles from "../post.module.css";

export const LikeIcon = ({
  likesCount,
  isLikedByUser,
  postId,
  likeBtnHandler
}) => {
  return (
    <div
      className={`${styles.icon_container} group `}
      onClick={() => likeBtnHandler(postId)}
    >
      {isLikedByUser ? (
        <span className={`p-1 rounded-full  `}>
          <AiFillHeart className={styles.likedIcon} />
        </span>
      ) : (
        <span className="group-hover:bg-red-50 rounded-full p-1 ">
          <AiOutlineHeart className="text-xl group-hover:text-red-600 " />
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

export const CommentIcon = ({ commentCount }) => {
  return (
    <>
      <div className={`${styles.icon_container} group `}>
        <span className=" p-1 rounded-full group-hover:bg-green-50 group-hover:text-green-600 ">
          <FaRegComment className={styles.icon} />
        </span>
        <span className=" group-hover:text-green-600 ">{commentCount}</span>
      </div>
    </>
  );
};

export const BookmarkIconComp = ({ postId }) => {
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

  return (
    <div
      className={`${styles.icon_container} group `}
      onClick={bookmarkBtnHandler}
    >
      <span className=" p-2 rounded-full group-hover:bg-green-50 dark:group-hover:bg-[color:var(--ternary-dark-color)] group-hover:text-green-600  dark:group-hover:text-[color:var(--primary-color)] ">
        {isBookmarked ? (
          <>
            <BsFillBookmarkFill className="   text-[color:var(--primary-light-color)] dark:text-[color:var(--primary-color)] " />
          </>
        ) : (
          <FaRegBookmark className={styles.icon} />
        )}
      </span>
    </div>
  );
};

export const ShareIcon = ({ postId }) => {
  const copyCurrentLink = useCopyCurrentLink();

  return (
    <div
      onClick={() => copyCurrentLink(postId)}
      className=" flex items-center text-xl gap-1 "
    >
      <AiOutlineShareAlt className={styles.icon} />
    </div>
  );
};

const PostIcons = ({ likes, comments, _id, isLikedByUser }) => {
  const { likePost, dislikePost } = usePosts();
  const likesCount = likes?.likeCount ? likes?.likeCount : 0;
  const commentCount = comments?.length;

  const likeBtnHandler = (postId) => {
    if (isLikedByUser) {
      dislikePost(postId);
    } else {
      likePost(postId);
    }
  };

  return (
    <div className="flex items-center justify-between py-1">
      <div className=" flex items-center gap-5 ">
        <LikeIcon
          likesCount={likesCount}
          postId={_id}
          isLikedByUser={isLikedByUser}
          likeBtnHandler={likeBtnHandler}
        />
        <Link to={`/post/${_id}`}>
          <CommentIcon commentCount={commentCount} />
        </Link>
        <ShareIcon postId={_id} />
      </div>
      <BookmarkIconComp postId={_id} />
    </div>
  );
};

export default PostIcons;
