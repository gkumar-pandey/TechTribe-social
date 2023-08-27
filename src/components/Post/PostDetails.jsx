import React, { useState } from "react";
import PostContent from "./components/PostContent";
import PostMedia from "./components/PostMedia";
import Avatar from "../Avatar/Avatar";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import styles from "./post.module.css";
import { useAuth, usePosts } from "../../context";
import CommentCard from "./components/CommentCard";
import { Loader } from "../Loader/Loader";
import { recentComments } from "../../utils";

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
          <p className="text-sm text-gray-700 ">{username}</p>
        </div>
      </div>
    </>
  );
};

const PostDetailsLikesSection = ({ likes, comments }) => {
  return (
    <>
      <div className="my-2 py-1 border-t border-b text-md font-semibold border-gray-500 ">
        <div>
          <span>{likes?.likeCount}</span>
          <span>Likes</span>
        </div>
      </div>
      <div className=" flex items-center justify-between py-1">
        <div className=" flex items-center gap-5 ">
          <div className=" flex items-center text-xl gap-1 ">
            <AiOutlineHeart className={styles.icon} />
            <span>5</span>
          </div>
          <div className=" flex items-center text-xl gap-1 ">
            <FaRegComment className={styles.icon} />
            <span>{comments?.length}</span>
          </div>
          <div className=" flex items-center text-xl gap-1 ">
            <AiOutlineShareAlt className={styles.icon} />
          </div>
        </div>
        <div>
          <FaRegBookmark className={styles.icon} />
        </div>
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
      <div className=" flex items-center my-2 ">
        <Avatar image={currUser.profileImage} alt={currUser.firstName} />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className=" text-lg h-30  w-full focus:outline-none px-2 py-1 "
          placeholder="Post your reply!"
        />
        <button
          onClick={replyBtnHandler}
          disabled={isReplyBtnDisable}
          className={`bg-green-700 w-20 text-white font-semibold py-1 px-3 rounded ${
            isReplyBtnDisable ? "opacity-80" : "cursor-pointer"
          } `}
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
  return (
    <div className="p-4 bg-white rounded-md shadow-md ">
      <PostDetailsTopSection {...postDetails} />
      <PostContent {...postDetails} />
      {postDetails.mediaUrl && <PostMedia {...postDetails} />}

      <PostDetailsLikesSection {...postDetails} />
      <CommentSection
        postId={postDetails._id}
        comments={postDetails.comments}
        setPostDetails={setPostDetails}
      />
    </div>
  );
};

export default PostDetails;
