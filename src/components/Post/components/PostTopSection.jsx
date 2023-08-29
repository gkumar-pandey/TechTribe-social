import React, { useState } from "react";
import styles from "../post.module.css";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth, usePosts } from "../../../context";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Loader } from "../../Loader/Loader";

import { EDIT_POST_MODAL } from "../../../reducer";

const PostTopSection = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isLoadingDeletePost, setIsLoadingDeletePost] = useState(false);
  const { currUser } = useAuth();
  const { deleteUserPost, dispatchModal, setEditPostFormData } = usePosts();
  const { firstName, lastName, username, userId, _id } = props;
  const isAuthorizedUser = currUser?._id === userId;

  const deleteBtnHandler = async () => {
    setIsLoadingDeletePost(true);
    await deleteUserPost(_id);
    setIsLoadingDeletePost(false);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <span>
          <Link to={`/profile/${userId}`}>
            <span className=" font-semibold text-lg hover:underline">
              {firstName + " " + lastName}
            </span>
          </Link>
          <span className="text-sm text-[color:var(--silent-text-color)]">
            @{username}
          </span>
        </span>

        {isAuthorizedUser && (
          <span className="relative ">
            <div
              onClick={() => setShowDropDown(!showDropDown)}
              className="p-2 hover:bg-green-100 dark:hover:bg-[color:var(--ternary-dark-color)]   cursor-pointer rounded-full "
            >
              <BsThreeDots className={styles.icon} />
            </div>
            <div
              className={`absolute top-8 right-3 flex flex-col gap-1 border border-gray-300 bg-white shadow-lg rounded-md p-2 dark:border-none dark:bg-[color:var(--ternary-dark-color)] ${
                showDropDown ? "visible" : "hidden"
              } `}
            >
              <button
                onClick={() => {
                  setEditPostFormData(props);
                  dispatchModal({ type: EDIT_POST_MODAL });
                  setShowDropDown(!showDropDown);
                }}
                className="px-3 py-1 font-medium gap-1 flex flex-row items-center text-[color:var(--primary-color)] cursor-pointer  hover:bg-green-100 dark:hover:bg-[color:var(--secondary-dark-color)] rounded-md text-base w-28  "
              >
                <EditIcon /> Edit
              </button>
              <button
                onClick={deleteBtnHandler}
                className="py-1 px-3 gap-1 font-medium  flex flex-row items-center hover:bg-red-100 text-red-600 dark:text-red-500 cursor-pointer   rounded-md text-base"
              >
                {isLoadingDeletePost ? (
                  <Loader />
                ) : (
                  <>
                    <DeleteIcon /> Delete
                  </>
                )}
              </button>
            </div>
          </span>
        )}
      </div>
    </>
  );
};

export default PostTopSection;
