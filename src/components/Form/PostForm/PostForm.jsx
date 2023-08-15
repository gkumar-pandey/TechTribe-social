import React, { useState } from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import { useAuth, usePosts } from "../../../context";
import { uploadPostService } from "../../../services";

const PostForm = () => {
  const {
    currUserState: { username, firstName, lastName, profileImage, userId }
  } = useAuth();
  const [postFormData, setPostFormData] = useState({
    content: ""
  });
  const { dispatchPosts } = usePosts();

  const postBtnHandler = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    await uploadPostService(
      { ...postFormData, userId, username, firstName, lastName, profileImage },
      token,
      dispatchPosts
    );
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostFormData((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div>
      <div>
        <form onSubmit={postBtnHandler} className=" p-4 ">
          <textarea
            placeholder="What's happening"
            className=" text-xl w-full p-2 border border-gray-600 rounded-md focus:outline-green-600 "
            rows={"6"}
            name="content"
            onChange={onChangeHandler}
          ></textarea>
          <div className="flex items-center justify-between py-2 ">
            <div>
              <div className="flex  items-center gap-4 my-1 ">
                <div className="flex items-center gap-1 text-green-700 font-semibold ">
                  <AddReactionOutlinedIcon />
                </div>
                <div>
                  <label className=" flex items-center cursor-pointer ">
                    <AddPhotoAlternateOutlinedIcon className="text-green-700 font-semibold " />
                    <input type="file" accept="image/*" className=" hidden " />
                  </label>
                </div>
              </div>
            </div>
            <button className=" bg-green-700 text-white px-4 py-1 font-semibold rounded text-md ">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
