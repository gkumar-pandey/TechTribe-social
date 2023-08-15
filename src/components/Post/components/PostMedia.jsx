import React from "react";

const PostMedia = ({ mediaUrl }) => {
  return (
    <>
      <div className="w-full rounded py-2 ">
        <img
          className=" w-full h-full rounded-md "
          src={mediaUrl}
          alt="media"
        />
      </div>
    </>
  );
};

export default PostMedia;
