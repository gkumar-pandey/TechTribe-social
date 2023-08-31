import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

const UploadPhotoBtn = ({ uploadPostImage }) => {
  return (
    <>
      <label className="flex items-center cursor-pointer ">
        <AddPhotoAlternateOutlinedIcon className=" text-[color:var(--primary-light-color)] dark:text-[color:var(--primary-color)] font-semibold " />
        <input
          type="file"
          onChange={uploadPostImage}
          accept="image/*"
          className=" hidden "
        />
      </label>
    </>
  );
};

export default UploadPhotoBtn;
