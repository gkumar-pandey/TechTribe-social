import React from "react";

const PostTextArea = ({ mediaUrl, onChangeHandler, value }) => {
  return (
    <>
      <textarea
        placeholder="What's happening"
        className=" text-xl w-full p-2 border-none focus:outline-none "
        rows={mediaUrl ? "2" : "6"}
        name="content"
        onChange={onChangeHandler}
        value={value}
      ></textarea>
    </>
  );
};

export default PostTextArea;
