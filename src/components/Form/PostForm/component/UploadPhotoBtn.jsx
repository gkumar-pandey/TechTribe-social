import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

const UploadPhotoBtn = ({ uploadPostImage }) => {
  return (
    <>
      <label className=" flex items-center cursor-pointer ">
        <AddPhotoAlternateOutlinedIcon className="text-green-700 font-semibold " />
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
