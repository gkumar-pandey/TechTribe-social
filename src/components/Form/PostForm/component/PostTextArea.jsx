import React from "react";

const PostTextArea = ({ mediaUrl, onChangeHandler }) => {
  return (
    <>
      <textarea
        placeholder="What's happening"
        className=" text-xl w-full p-2 border-none rounded-md focus:outline-green-600 "
        rows={mediaUrl ? "2" : "6"}
        name="content"
        onChange={onChangeHandler}
      ></textarea>
    </>
  );
};

export default PostTextArea;
