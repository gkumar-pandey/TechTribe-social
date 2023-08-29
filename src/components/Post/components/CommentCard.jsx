import React, { useState } from "react";
import Avatar from "../../Avatar/Avatar";
import styles from "../post.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditDeleteDropDown from "./EditDeleteDropDown";
import { usePosts } from "../../../context/post-context/post-context";

const CommentCard = ({
  _id,
  firstName,
  lastName,
  profileImage,
  username,
  comment,
  postId,
  setPostDetails
}) => {
  const [editCommentData, setEditCommentData] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);
  const { editComment, deleteComment } = usePosts();
  const editBtnHandler = () => {
    setShowEditInput(true);
    setEditCommentData(comment);
  };

  const cancelEditBtnHandler = () => {
    setShowEditInput(false);
    setEditCommentData("");
  };

  const saveBtnHandler = async () => {
    const comments = await editComment(postId, _id, editCommentData);
    setPostDetails((pre) => ({ ...pre, comments: comments }));
    setShowEditInput(false);
  };

  const deleteBtnHandler = async () => {
    const comments = await deleteComment(postId, _id);
    setPostDetails((pre) => ({ ...pre, comments: comments }));
  };

  const fullName = firstName + " " + lastName;
  const isAuthorizedUser = true;

  return (
    <>
      <div className="p-2 border my-4 dark:bg-[color:var(--ternary-dark-color)] dark:border-none rounded-md ">
        <div className="flex gap-1">
          <Avatar image={profileImage} alt={username} />
          <div className="w-full ">
            <div className="flex items-start justify-between">
              <span>
                <span className={styles.full_name}>{fullName}</span>
                <span className={styles.username}>{username}</span>
              </span>
              {isAuthorizedUser && (
                <EditDeleteDropDown
                  deleteBtnHandler={deleteBtnHandler}
                  editBtnHandler={editBtnHandler}
                />
              )}
            </div>
            {showEditInput ? (
              <div className="flex items-center justify-between ">
                <input
                  type="text"
                  autoFocus
                  value={editCommentData}
                  className="p-2 border border-t-0 border-l-0 border-r-0 w-full border-b-2 focus:outline-none  "
                  onChange={(e) => setEditCommentData(e.target.value)}
                />
                <button
                  onClick={cancelEditBtnHandler}
                  className="mx-1 cursor-pointer text-red-700 "
                >
                  <CancelIcon sx={{ fontSize: "1.8rem" }} />
                </button>
                <button
                  onClick={saveBtnHandler}
                  className=" cursor-pointer text-green-700 "
                >
                  <CheckCircleIcon sx={{ fontSize: "1.8rem" }} />
                </button>
              </div>
            ) : (
              <p className="text-lg ">{comment}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
