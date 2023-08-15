import React from "react";
import Avatar from "../../Avatar/Avatar";
import { Link } from "react-router-dom";

const ProfileTile = ({ profileImage, firstName, lastName, username, _id }) => {
  return (
    <Link to={`/profile/${_id}`}>
      <div className=" flex items-center justify-between  hover:bg-slate-100 cursor-pointer m-2 p-2 border rounded-md  ">
        <div className="flex items-center gap-2 ">
          <Avatar image={profileImage} />
          <div className="  ">
            <p className=" font-semibold text-sm  ">
              {firstName + " " + lastName}
            </p>
            <p className=" text-sm text-slate-600 ">@{username}</p>
          </div>
        </div>
        <button className=" px-3 py-1 h-full rounded text-sm font-medium bg-green-700 text-white ">
          Follow
        </button>
      </div>
    </Link>
  );
};

export default ProfileTile;
