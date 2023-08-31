import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth, usePosts } from "../../../context";
import { uploadPostService } from "../../../services";
import { Loader } from "../../Loader/Loader";
import {
  EmojiBtn,
  PostMediaComp,
  PostTextArea,
  UploadPhotoBtn
} from "./component";
import Emoji from "../../Emoji/Emoji";
import styles from "./postform.module.css";
import { ADD_NEW_POST } from "../../../reducer";

const PostForm = ({ closeModal }) => {
  const {
    currUser: { username, firstName, lastName, profileImage, _id },
    token
  } = useAuth();

  const [selectedFile, setSelectedFile] = useState("");
  const [postFormData, setPostFormData] = useState({
    content: "",
    mediaUrl: ""
  });
  const [selectEmoji, setSelectEmoji] = useState(false);
  const { dispatchPosts } = usePosts();
  const [isLoading, setIsLoading] = useState(false);

  const postBtnHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let mediaUrl = "";
    if (selectedFile) {
      mediaUrl = await uploadToCloudinary(selectedFile);
    }
    try {
      const { data, status } = await uploadPostService(
        {
          ...postFormData,
          mediaUrl: mediaUrl,
          userId: _id,
          username,
          firstName,
          lastName,
          profileImage
        },
        token
      );

      if (status === 201) {
        dispatchPosts({ type: ADD_NEW_POST, payload: data.posts });
        setIsLoading(false);
        closeModal();
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "techtribe");
    data.append("cloud_name", "dlykup1dh");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlykup1dh/auto/upload",
        {
          method: "POST",
          body: data
        }
      );
      const resData = await res.json();

      return resData?.url;
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostFormData((pre) => ({ ...pre, [name]: value }));
  };
  const emojiSelectHandler = (e) => {
    setPostFormData((pre) => ({
      ...pre,
      content: postFormData.content + e.emoji
    }));
  };

  const isPostBtnDisable =
    postFormData.content === "" && postFormData.mediaUrl === "";

  const uploadPostImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setSelectedFile(file);
    setPostFormData((pre) => ({ ...pre, mediaUrl: url }));
  };

  const removePostMediaHandler = () => {
    setPostFormData((pre) => ({ ...pre, mediaUrl: "" }));
    setSelectedFile("");
  };

  return (
    <div>
      <div>
        <form onSubmit={postBtnHandler} className="p-4">
          <PostTextArea
            value={postFormData?.content}
            onChangeHandler={onChangeHandler}
            mediaUrl={postFormData?.mediaUrl}
          />
          <>
            {postFormData?.mediaUrl && (
              <PostMediaComp
                mediaUrl={postFormData?.mediaUrl}
                removePostMediaHandler={removePostMediaHandler}
              />
            )}
          </>
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="flex  items-center gap-4 my-1 ">
                <EmojiBtn onClick={() => setSelectEmoji(!selectEmoji)} />
                <UploadPhotoBtn uploadPostImage={uploadPostImage} />
                {selectEmoji && (
                  <Emoji
                    onClose={() => setSelectEmoji(!selectEmoji)}
                    emojiSelectHandler={emojiSelectHandler}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center flow-row gap-3  ">
              <button
                type="button"
                onClick={() => closeModal()}
                className={`${styles.cancel_btn} outline-btn `}
              >
                cancel
              </button>
              <button
                disabled={isPostBtnDisable}
                className={`${styles.btn} solid-btn ${
                  isPostBtnDisable && "opacity-80"
                }`}
              >
                {isLoading ? <Loader /> : "Add Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
