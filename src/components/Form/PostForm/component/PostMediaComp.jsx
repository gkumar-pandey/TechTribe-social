import React from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const PostMediaComp = ({ mediaUrl, removePostMediaHandler }) => {
  return (
    <>
      <div className=" relative ">
        <img
          className="w-full h-[25rem] rounded object-fill"
          src={mediaUrl}
          alt="post-img"
        />
        <p className=" absolute top-1 right-1 bg-slate-100 rounded-full p-1">
          <ClearOutlinedIcon
            className="text-2xl font-bold cursor-pointer  "
            onClick={removePostMediaHandler}
          />
        </p>
      </div>
    </>
  );
};

export default PostMediaComp;
