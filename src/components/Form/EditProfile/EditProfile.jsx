import React, { useEffect, useState } from "react";
import { useAuth, useUsers } from "../../../context";
import { updateUserProfile } from "../../../services";
import EditFormInput from "./component/EditFormInput";
import UpdateProfileAndCover from "./component/UpdateProfileAndCover";
import styles from "./editform.module.css";

const EditProfile = ({ editProfileModalHandler }) => {
  const { currUser, setCurrUser } = useAuth();
  const { setOtherUser } = useUsers();
  const [isUploading, setIsUploading] = useState(false);
  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    link: ""
  });

  useEffect(() => {
    setEditData(currUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeHandler = (e) => {
    setEditData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const uploadToCloudinary = async (file) => {
    setIsUploading(true);
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
      setIsUploading(false);
      return resData?.url;
    } catch (error) {
      setIsUploading(false);
      console.log(error);
    }
  };

  const uploadProfileImg = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = await uploadToCloudinary(file);
    setEditData((pre) => ({ ...pre, profileImage: url }));
  };

  const uploadCoverImg = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = await uploadToCloudinary(file, setIsUploading);
    setEditData((pre) => ({ ...pre, coverImage: url }));
  };

  const updateUser = async () => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    await updateUserProfile(
      editData,
      token,
      setCurrUser,
      setOtherUser,
      setIsUploading,
      editProfileModalHandler
    );
  };

  const inputFields = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "bio", label: "Bio" },
    { name: "link", label: "Link" }
  ];

  return (
    <div>
      <div className=" py-2">
        <UpdateProfileAndCover
          profileImg={editData?.profileImage}
          coverImg={editData?.coverImage}
          uploadProfileImg={uploadProfileImg}
          uploadCoverImg={uploadCoverImg}
        />
      </div>
      <div>
        {inputFields.map(({ name, label }, idx) => (
          <EditFormInput
            name={name}
            label={label}
            placeholder={label}
            onChange={onChangeHandler}
            value={editData[name]}
            key={idx}
          />
        ))}
        <div className="flex items-center justify-end">
          <button
            type="button"
            className={`${styles.save_btn}`}
            onClick={updateUser}
          >
            {isUploading ? "uploading.." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
