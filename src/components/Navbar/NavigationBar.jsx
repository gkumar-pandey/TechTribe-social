import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useNavigate } from "react-router-dom";
import { usePosts } from "../../context";
import { POST_MODAL } from "../../reducer";

const NavigationBar = () => {
  const { dispatchModal } = usePosts();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className=" md:hidden xl:hidden sticky bottom-1 left-0 z-40 flex shadow-lg border items-center justify-between bg-white p-2 rounded-md dark:border-none dark:text-[color:var(--text-color)] dark:bg-[color:var(--secondary-dark-color)] ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className={`${
          pathname === "/" &&
          "dark:bg-[color:var(--ternary-dark-color)] text-[color:var(--primary-color)]"
        } p-2 rounded `}
      >
        <HomeIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button
        className={`${
          pathname === "/explore" &&
          "dark:bg-[color:var(--ternary-dark-color)] text-[color:var(--primary-color)]"
        } p-2 rounded`}
        onClick={() => {
          navigate("/explore");
        }}
      >
        <ExploreIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button
        className="border-2 rounded-md p-1 border-gray-800 dark:text-[color:var(--primary-color)] dark:border-[color:var(--primary-color)]  "
        onClick={() => dispatchModal({ type: POST_MODAL })}
      >
        <AddIcon
          sx={{
            fontSize: "1.8rem"
          }}
        />
      </button>
      <button
        onClick={() => {
          navigate("/search");
        }}
        className={`${
          pathname === "/search" &&
          "dark:bg-[color:var(--ternary-dark-color)] text-[color:var(--primary-color)]"
        } p-2 rounded `}
      >
        <SearchIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button
        onClick={() => {
          navigate("/bookmarks");
        }}
        className={`${
          pathname === "/bookmarks" &&
          "dark:bg-[color:var(--ternary-dark-color)] text-[color:var(--primary-color)]"
        } p-2 rounded`}
      >
        <BookmarkIcon sx={{ fontSize: "2rem" }} />
      </button>
    </aside>
  );
};

export default NavigationBar;
