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
    <aside className=" md:hidden xl:hidden sticky bottom-0 left-0 z-40 flex shadow-lg border items-center justify-between bg-white p-2 rounded-md ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className={`${
          pathname === "/" && "bg-green-200 text-green-700"
        } p-2 rounded `}
      >
        <HomeIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button
        className={`${
          pathname === "/explore" && "bg-green-200 text-green-700"
        } p-2 rounded`}
        onClick={() => {
          navigate("/explore");
        }}
      >
        <ExploreIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button onClick={() => dispatchModal({ type: POST_MODAL })}>
        <AddIcon
          sx={{
            fontSize: "1.8rem",
            border: "2px solid black",
            borderRadius: "4px"
          }}
        />
      </button>
      <button
        onClick={() => {
          navigate("/search");
        }}
        className={`${
          pathname === "/search" && "bg-green-200 text-green-700"
        } p-2 rounded `}
      >
        <SearchIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button
        onClick={() => {
          navigate("/bookmarks");
        }}
        className={`${
          pathname === "/bookmarks" && "bg-green-200 text-green-700"
        } p-2 rounded`}
      >
        <BookmarkIcon sx={{ fontSize: "2rem" }} />
      </button>
    </aside>
  );
};

export default NavigationBar;
