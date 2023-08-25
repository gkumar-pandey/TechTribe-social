import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useAuth, useUsers } from "../../../context";
import Avatar from "../../Avatar/Avatar";
import Button from "../../Buttons/Button";
import { isFollowing } from "../../../utils";

const ProfileCoverAndPic = ({
  profileImage,
  username,
  coverImage,
  editProfileModelHandler
}) => {
  const { followHandler, unfollowHandler } = useUsers();
  const { currUser } = useAuth();
  const [onHover, setOnHover] = useState(false);
  const { userId } = useParams();

  const followBtnHandler = () => {
    if (isFollowing(currUser?.following, userId)) {
      unfollowHandler(userId);
    } else {
      followHandler(userId);
    }
  };

  return (
    <>
      <div className="relative  py-1 ">
        <div className={`h-[15rem] ${!coverImage && "bg-gray-300"} `}>
          {coverImage && (
            <img
              className="  w-full h-full object-fit"
              src={coverImage}
              alt="cover-img"
            />
          )}
        </div>
        <div className=" w-full   p-4 flex justify-end ">
          <div className=" absolute left-3 top-1/2  border-4 border-slate-50 rounded-full  ">
            <Avatar size={"xl"} image={profileImage} alt={username} />
          </div>
          {currUser._id === userId ? (
            <Button onClick={editProfileModelHandler} BtnType={"outlined"}>
              Edit profile
            </Button>
          ) : (
            <>
              {isFollowing(currUser?.following, userId) ? (
                <Button onClick={followBtnHandler} BtnType={"outlined"}>
                  {onHover ? "Unfollow" : "Following"}
                </Button>
              ) : (
                <Button BtnType={"solid"} onClick={followBtnHandler}>
                  Follow
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const UserProfileDetails = ({
  nameOfUser,
  username,
  bioOfUser,
  userLink,
  followersCount,
  followingCount,
  postsCount
}) => {
  return (
    <div className="px-4">
      <div>
        <p className="text-xl font-extrabold">{nameOfUser}</p>
        <p className="text-md text-slate-700 ">@{username}</p>
      </div>
      <div className=" py-1">
        <div>
          <p>{bioOfUser}</p>
        </div>
        <div>
          Website :{" "}
          <Link to={userLink} target="_blank">
            <span className="text-blue-600 font-semibold">{userLink}</span>
          </Link>
        </div>
      </div>

      <div className=" flex items-center gap-2 py-1 ">
        <p>
          <span className="font-semibold">{followingCount}</span>{" "}
          <span className=" hover:underline cursor-pointer ">Following</span>
        </p>
        <p>
          <span className="font-semibold">{followersCount}</span>{" "}
          <span className=" hover:underline cursor-pointer ">Followers</span>
        </p>
        <p>
          <span className="font-semibold">{postsCount}</span> Posts{" "}
        </p>
      </div>
    </div>
  );
};

const ProfileDetails = ({ otherUser, editProfileModelHandler }) => {
  const { otherUsersPosts } = useUsers();

  const nameOfUser = otherUser?.firstName + " " + otherUser?.lastName;
  const username = otherUser?.username;
  const bioOfUser = otherUser?.bio;
  const userLink = otherUser?.link;
  const following = otherUser?.following;
  const followers = otherUser?.followers;
  const followingCount = following?.length;
  const followersCount = followers?.length;
  const postsCount = otherUsersPosts?.length;

  return (
    <>
      <ProfileCoverAndPic
        username={otherUser?.username}
        profileImage={otherUser?.profileImage}
        coverImage={otherUser?.coverImage}
        editProfileModelHandler={editProfileModelHandler}
      />
      <UserProfileDetails
        nameOfUser={nameOfUser}
        username={username}
        bioOfUser={bioOfUser}
        userLink={userLink}
        followersCount={followersCount}
        followingCount={followingCount}
        postsCount={postsCount}
      />
    </>
  );
};

export default ProfileDetails;
