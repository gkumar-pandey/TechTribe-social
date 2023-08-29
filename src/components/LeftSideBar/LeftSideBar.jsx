import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

import Avatar from "../Avatar/Avatar";
import Modal from "../Modal/Modal";
import PostForm from "../Form/PostForm/PostForm";
import PostModalTitle from "../Form/PostForm/component/PostModalTitle";
import SideBarBtn from "./components/SideBarBtn";
import { useAuth, usePosts } from "../../context";
import { POST_MODAL } from "../../reducer";
import Button from "../Buttons/Button";

const LeftSideBar = () => {
  const { currUser, logoutHandler } = useAuth();
  const [openDropDown, setOpenDropDown] = useState(false);
  const {
    modal: { addPost },
    dispatchModal
  } = usePosts();
  const navigate = useNavigate();

  const navigationLinks = [
    { name: "Home", icon: <HomeIcon sx={{ fontSize: "2rem" }} />, link: "/" },
    {
      name: "Explore",
      icon: <ExploreIcon sx={{ fontSize: "2rem" }} />,
      link: "/explore"
    },
    {
      name: "Search",
      icon: <SearchIcon sx={{ fontSize: "2rem" }} />,
      link: "/search"
    },
    {
      name: "Bookmarks",
      icon: <BookmarkIcon sx={{ fontSize: "2rem" }} />,
      link: "/bookmarks"
    },
    {
      name: "Profile",
      icon: <PersonIcon sx={{ fontSize: "2rem" }} />,
      link: `/profile/${currUser?._id}`
    }
  ];

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <div className="sm:hidden flex flex-col justify-between bg-white dark:bg-[color:var(--secondary-dark-color)] dark:text-[color:var(--text-color)]  border border-gray-100 dark:border-none shadow-md rounded w-full xl:w-5/6 max-w-[30rem] px-2 py-4 sticky top-24  h-[80vh] ">
        <div>
          <div>
            {navigationLinks.map((item, idx) => (
              <SideBarBtn key={idx} {...item} />
            ))}
          </div>
          <div className="w-full">
            <Button
              BtnType="solid"
              onClick={() => dispatchModal({ type: POST_MODAL })}
            >
              Add Post
            </Button>
          </div>
        </div>

        <div
          onClick={toggleDropDown}
          className="flex items-center justify-between py-2 px-1 hover:bg-slate-100 dark:hover:bg-[color:var(--ternary-dark-color)] cursor-pointer rounded relative "
        >
          <div className="flex items-center text-sm gap-2 ">
            <Avatar image={currUser?.profileImage} />
            <div>
              <p className=" font-semibold ">
                {currUser?.firstName + " " + currUser?.lastName}
              </p>
              <p>{currUser?.username}</p>
            </div>
          </div>
          <div>
            <MoreHorizIcon />
          </div>
          <div
            className={`absolute -top-28 border dark:border-none dark:bg-[color:var(--ternary-dark-color)] rounded-md shadow-lg ${
              openDropDown ? "" : "hidden"
            }  `}
          >
            <div className="flex flex-col items-start p-2">
              <button
                onClick={() => navigate("/login")}
                className="my-1 py-1 px-3 rounded font-medium dark:bg-[color:var(--secondary-dark-color)] "
              >
                Add an existing account
              </button>
              <button
                onClick={logoutHandler}
                className="my-1 py-1 px-3 rounded bg-red-600 text-white font-medium"
              >
                Log out @{currUser?.username}
              </button>
            </div>
          </div>
        </div>
        <Modal
          title={<PostModalTitle />}
          isOpen={addPost}
          onClose={() => dispatchModal({ type: POST_MODAL })}
        >
          <PostForm closeModal={() => dispatchModal({ type: POST_MODAL })} />
        </Modal>
      </div>
    </>
  );
};

export default LeftSideBar;
