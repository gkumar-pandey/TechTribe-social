import React, { useState } from "react";
import PostContent from "./components/PostContent";
import PostMedia from "./components/PostMedia";
import Avatar from "../Avatar/Avatar";

import styles from "./post.module.css";
import { useAuth, usePosts } from "../../context";
import CommentCard from "./components/CommentCard";
import { Loader } from "../Loader/Loader";
import { recentComments } from "../../utils";
import { toast } from "react-hot-toast";
import { dislikeService, likeService } from "../../services";
import {
  BookmarkIconComp,
  CommentIcon,
  LikeIcon,
  ShareIcon
} from "./components/PostIcons";

const PostDetailsTopSection = ({
  username,
  profileImage,
  firstName,
  lastName
}) => {
  return (
    <>
      <div className="flex gap-2 items-center  ">
        <Avatar image={profileImage} />
        <div className="text-justify">
          <p className="text-md font-semibold">{firstName + " " + lastName}</p>
          <p className="text-sm text-[color:var(--silent-text-color)] ">
            {username}
          </p>
        </div>
      </div>
    </>
  );
};

const PostDetailsLikesSection = ({
  likes,
  comments,
  likeBtnHandler,
  isLiked,
  _id
}) => {
  const likesCount = likes?.likeCount;
  const commentCount = comments?.length;

  return (
    <>
      <div className=" flex my-2 items-center justify-between py-1 border-l-0 border-r-0 px-1 border border-gray-500 ">
        <div className=" flex items-center gap-5 ">
          <LikeIcon
            likesCount={likesCount}
            isLikedByUser={isLiked}
            likeBtnHandler={likeBtnHandler}
            postId={_id}
          />
          <CommentIcon commentCount={commentCount} />
          <ShareIcon postId={_id} />
        </div>
        <BookmarkIconComp postId={_id} />
      </div>
    </>
  );
};

const CommentSection = ({ postId, setPostDetails, comments }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { currUser } = useAuth();
  const { postComment } = usePosts();

  const replyBtnHandler = async () => {
    setIsLoading(true);
    const comments = await postComment(postId, comment);
    setPostDetails((pre) => ({ ...pre, comments: comments }));
    setComment("");
    setIsLoading(false);
  };

  const isReplyBtnDisable = comment === "" ? true : false;

  const commentsArr = recentComments(comments);

  return (
    <div>
      <div className=" flex items-center my-4 ">
        <Avatar image={currUser.profileImage} alt={currUser.firstName} />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className=" text-lg h-30 bg-[color:var(--secondary-dark-color)]  w-full focus:outline-none px-2 py-1 "
          placeholder="Post your reply!"
        />
        <button
          onClick={replyBtnHandler}
          disabled={isReplyBtnDisable}
          className={`${
            isReplyBtnDisable
              ? "opacity-50"
              : "cursor-pointer hover:opacity-90 "
          } ${styles.reply_btn} `}
        >
          {isLoading ? <Loader /> : "Reply"}
        </button>
      </div>
      <div>
        {commentsArr?.map((ele) => (
          <CommentCard
            key={ele._id}
            {...ele}
            setPostDetails={setPostDetails}
            postId={postId}
          />
        ))}
      </div>
    </div>
  );
};

const PostDetails = ({ postDetails, setPostDetails }) => {
  const { token, currUser } = useAuth();
  const isLiked = postDetails?.likes?.likedBy.find(
    (ele) => ele._id === currUser._id
  );

  const likeBtnHandler = async () => {
    try {
      const { data, status } = isLiked
        ? await dislikeService(postDetails._id, token)
        : await likeService(postDetails._id, token);
      const post = data.posts.find((ele) => ele._id === postDetails._id);

      if (status) {
        setPostDetails(post);
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };
  return (
    <div className="p-4 bg-white dark:bg-[color:var(--secondary-dark-color)] dark:text-[color:var(--text-color)] rounded-md shadow-md ">
      <PostDetailsTopSection {...postDetails} />
      <PostContent {...postDetails} />
      {postDetails.mediaUrl && <PostMedia {...postDetails} />}

      <PostDetailsLikesSection
        likeBtnHandler={likeBtnHandler}
        isLiked={isLiked}
        {...postDetails}
      />
      <CommentSection
        postId={postDetails._id}
        comments={postDetails.comments}
        setPostDetails={setPostDetails}
      />
    </div>
  );
};

export default PostDetails;
