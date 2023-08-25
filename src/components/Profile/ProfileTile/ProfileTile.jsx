import React from "react";
import Avatar from "../../Avatar/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useUsers } from "../../../context";
import { isFollowing } from "../../../utils";

const FollowBtn = ({ onClickHandler, isFollowingCurrUser }) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className=" bg-green-700 text-white ml-2 rounded py-1 px-3  "
    >
      {isFollowingCurrUser ? "Unfollow" : "Follow"}
    </button>
  );
};

const ProfileTile = ({ profileImage, firstName, lastName, username, _id }) => {
  const {
    currUser: { following }
  } = useAuth();
  const { followHandler, unfollowHandler } = useUsers();
  const isFollowingCurrUser = isFollowing(following, _id);
  const onClickHandler = () => {
    if (isFollowingCurrUser) {
      unfollowHandler(_id);
    } else {
      followHandler(_id);
    }
  };

  return (
    <div className="flex items-center justify-between hover:bg-slate-100 m-2 p-2 border rounded-md">
      <div className=" overflow-hidden line-clamp-1 ">
        <Link to={`/profile/${_id}`}>
          <div className="flex items-center gap-2">
            <Avatar image={profileImage} />
            <div>
              <p className="font-semibold text-sm line-clamp-1 ">
                {firstName + " " + lastName}
              </p>
              <p className="text-sm text-slate-600 line-clamp-1">{username}</p>
            </div>
          </div>
        </Link>
      </div>
      <FollowBtn
        isFollowingCurrUser={isFollowingCurrUser}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default ProfileTile;
