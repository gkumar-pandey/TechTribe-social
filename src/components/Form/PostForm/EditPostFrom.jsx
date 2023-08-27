import React, { useState } from "react";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { toast } from "react-hot-toast";
import { editPostService } from "../../../services";
import { useAuth, usePosts } from "../../../context";
import { Loader } from "../../Loader/Loader";
import { EDIT_POST_MODAL, UPDATE_POST } from "../../../reducer";
import styles from "./postform.module.css";

const EditPostFrom = () => {
  const { editPostFormData, setEditPostFormData } = usePosts();
  const [isUpdating, setIsUpdating] = useState(false);
  const { dispatchPosts, dispatchModal } = usePosts();
  const { token } = useAuth();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEditPostFormData((pre) => ({ ...pre, [name]: value }));
  };

  const updateBtnHandler = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const { data, status } = await editPostService(
        editPostFormData?._id,
        token,
        editPostFormData
      );

      if (status === 201) {
        dispatchPosts({ type: UPDATE_POST, payload: data?.posts });
        setIsUpdating(false);
        dispatchModal({ type: EDIT_POST_MODAL });
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
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
                  editPostFormData?.mediaUrl ? "w-1/2" : "w-full"
                } sm:w-full min-h-[18rem] sm:min-h-full p-2 focus:outline-none `}
                value={editPostFormData?.content}
                name="content"
                onChange={onChangeHandler}
              ></textarea>
              {editPostFormData?.mediaUrl && (
                <img
                  className="w-1/2 h-[18rem] sm:w-full rounded object-fill"
                  src={editPostFormData?.mediaUrl}
                  alt={editPostFormData?._id}
                />
              )}
            </div>
            <div className="flex items-center justify-between py-2 ">
              <div>
                <div className="flex  items-center gap-4 my-1">
                  <div className="flex items-center gap-1 text-green-700 font-semibold">
                    <AddReactionOutlinedIcon />
                  </div>
                  <div>
                    <label className="flex items-center cursor-pointer">
                      <AddPhotoAlternateOutlinedIcon className="text-green-700 font-semibold" />
                      <input
                        type="file"
                        accept="image/*"
                        className=" hidden "
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center flow-row gap-3">
                <button
                  type="button"
                  onClick={() => dispatchModal({ type: EDIT_POST_MODAL })}
                  className={`${styles.cancel_btn}`}
                >
                  cancel
                </button>
                <button className={`${styles.btn} `}>
                  {isUpdating ? <Loader /> : "save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPostFrom;
