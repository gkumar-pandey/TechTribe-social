import React from "react";
import PostContent from "./components/PostContent";
import PostMedia from "./components/PostMedia";
import Avatar from "../Avatar/Avatar";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import styles from "./post.module.css";

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

const PostDetailsLikesSection = ({ likes }) => {
  return (
    <>
      <div className="my-2 py-1 border-t border-b text-md font-semibold border-gray-500 ">
        <div>
          <span>{likes.likeCount}</span>
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
            <span>6</span>
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

const CommentSection = ({ profileUrl }) => {
  return (
    <div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

const PostDetails = () => {
  const data = {
    _id: "7c015944-041b-4c9b-9b3a-48b2ab1f1010",
    content: "It's not magic, it's talent and sweat",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687083339/TechTribe/PostsImg/post-6.jpg",
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: []
    },
    profileUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    id: 17
  };
  return (
    <div className="p-4 bg-white ">
      <PostDetailsTopSection {...data} />
      <PostContent {...data} />
      <PostMedia {...data} />
      <PostDetailsLikesSection {...data} />
      <PostDetails {...data} />
    </div>
  );
};

export default PostDetails;
