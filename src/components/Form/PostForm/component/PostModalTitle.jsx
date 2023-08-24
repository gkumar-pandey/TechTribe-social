import React from "react";
import Avatar from "../../../Avatar/Avatar";
import { useAuth } from "../../../../context";

const PostModalTitle = () => {
  const {
    currUser: { firstName, lastName, profileImage, username }
  } = useAuth();
  return (
    <>
      <div className=" flex flex-row items-center  gap-1 ">
        <Avatar image={profileImage} />
        <div className=" flex flex-col   ">
          <p>{firstName + " " + lastName} </p>
          <span className="text-base text-gray-600 font-normal ">
            {username}
          </span>
        </div>
      </div>
    </>
  );
};

export default PostModalTitle;
