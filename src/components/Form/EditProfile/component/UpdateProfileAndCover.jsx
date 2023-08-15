import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Avatar from "../../../Avatar/Avatar";
import styles from "../editform.module.css";

const UpdateProfileAndCover = ({
  profileImg,
  coverImg,
  uploadCoverImg,
  uploadProfileImg
}) => {
  return (
    <div>
      <div className="relative py-1">
        <div className=" h-[10rem] relative">
          <img
            src={coverImg}
            className="w-full h-full object-fit"
            alt="cover-img"
          />
          <label>
            <div className={`${styles.top_layer}`}></div>
            <AddAPhotoIcon
              className={`${styles.addPhotoIcon} top-1/2 left-1/2 `}
            />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={uploadCoverImg}
            />
          </label>
        </div>
        <div className="w-full p-4 flex justify-end">
          <div className="absolute left-3 top-1/2  border-2 border-slate-50 rounded-full  ">
            <label>
              <div className={`${styles.top_layer} rounded-full`}></div>
              <AddAPhotoIcon
                className={`${styles.addPhotoIcon} top-1/3 left-1/3 `}
              />
              <Avatar size={"md"} image={profileImg} />
              <input
                type="file"
                className="hidden "
                accept="image/*"
                onChange={uploadProfileImg}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileAndCover;
