import React, { useState } from "react";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { editPostService } from "../../../services";
import { usePosts } from "../../../context";
import { Loader } from "../../Loader/Loader";

const EditPostFrom = ({ _id, content, mediaUrl }) => {
  const [formData, setFormData] = useState({ _id: _id, content: content });
  const [isUpdating, setIsUpdating] = useState(false);
  const { token, dispatchPosts } = usePosts();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const updateBtnHandler = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    await editPostService(_id, token, formData, dispatchPosts);
    setIsUpdating(false);
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={updateBtnHandler} className=" p-4 ">
            <div className=" flex flex-row items-start sm:flex-wrap gap-2 ">
              <textarea
                placeholder="What's happening"
                className={`text-xl ${
                  mediaUrl ? "w-1/2" : "w-full"
                } sm:w-full min-h-[18rem] sm:min-h-full p-2  border-gray-600 rounded focus:outline-green-600`}
                value={formData?.content}
                name="content"
                onChange={onChangeHandler}
              ></textarea>
              {mediaUrl && (
                <img
                  className="w-1/2 h-[18rem] sm:w-full rounded object-fill"
                  src={mediaUrl}
                  alt={_id}
                />
              )}
            </div>
            <div className="flex items-center justify-between py-2 ">
              <div>
                <div className="flex  items-center gap-4 my-1 ">
                  <div className="flex items-center gap-1 text-green-700 font-semibold ">
                    <AddReactionOutlinedIcon />
                  </div>
                  <div>
                    <label className=" flex items-center cursor-pointer ">
                      <AddPhotoAlternateOutlinedIcon className="text-green-700 font-semibold " />
                      <input
                        type="file"
                        accept="image/*"
                        className=" hidden "
                      />
                    </label>
                  </div>
                </div>
              </div>
              <button className=" w-20 bg-green-700 text-white px-4 py-1 font-semibold rounded text-md ">
                {isUpdating ? <Loader /> : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPostFrom;
