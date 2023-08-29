import React from "react";
import Avatar from "../../Avatar/Avatar";
import { Link } from "react-router-dom";
import { useAuth, useUsers } from "../../../context";
import { isFollowing } from "../../../utils";
import styles from "./styles.module.css";

const FollowBtn = ({ onClickHandler, isFollowingCurrUser }) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`${styles.follow_btn} solid-btn `}
    >
      {isFollowingCurrUser ? "Unfollow" : "Follow"}
    </button>
  );
};

const ProfileTile = ({ profileImage, firstName, lastName, username, _id }) => {
  const { currUser } = useAuth();
  const { followHandler, unfollowHandler } = useUsers();
  const isFollowingCurrUser = isFollowing(currUser?.following, _id);
  const onClickHandler = () => {
    if (isFollowingCurrUser) {
      unfollowHandler(_id);
    } else {
      followHandler(_id);
    }
  };

  return (
    <div className="flex items-center justify-between dark:text-[color:var(--text-color)] hover:bg-slate-100 m-2 p-2 border dark:hover:bg-[color:var(--ternary-dark-color)] dark:border-none rounded-md">
      <div className="overflow-hidden line-clamp-1 ">
        <Link to={`/profile/${_id}`}>
          <div className="flex items-center gap-2">
            <Avatar image={profileImage} />
            <div>
              <p className="font-semibold text-sm line-clamp-1 ">
                {firstName + " " + lastName}
              </p>
              <p className="text-sm line-clamp-1 dark:text-[color:var(--silent-text-color)] ">
                {username}
              </p>
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
