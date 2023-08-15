/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Post,
  EditProfile,
  Modal,
  Tabs,
  ProfileDetails,
  ProfileDetailsShimmer,
  ShimmerPosts
} from "../../components";
import { usePosts, useUsers } from "../../context";
import { useScrollToTop } from "../../hooks";
import { getPostsByUserName, getUsersDetailsByUsername } from "../../services";
import { SET_OTHER_USER_POSTS } from "../../reducer/actions/actions";

const ProfilePage = () => {
  const [isLoadingUserDetails, setIsLoadingUserDetails] = useState(false);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  const [openEditProfileModel, setOpenEditProfileModel] = useState(false);
  const { otherUser, setOtherUser } = useUsers();
  const {
    posts: { otherUserPosts },
    dispatchPosts
  } = usePosts();
  const { userId } = useParams();
  useScrollToTop();
  const fetchUserDetails = async () => {
    await getUsersDetailsByUsername(
      userId,
      setOtherUser,
      setIsLoadingUserDetails
    );
  };

  const fetchUserPosts = async () => {
    setIsLoadingUserPosts(true);
    try {
      const { data, status } = await getPostsByUserName(otherUser?.username);
      if (status === 200) {
        dispatchPosts({ type: SET_OTHER_USER_POSTS, payload: data?.posts });
        setIsLoadingUserPosts(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoadingUserPosts(false);
    }
  };

  const editProfileModelHandler = () => {
    setOpenEditProfileModel(!openEditProfileModel);
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  useEffect(() => {
    fetchUserPosts();
  }, [otherUser]);

  return (
    <div>
      {!isLoadingUserDetails && otherUser ? (
        <div className="bg-white  shadow-md">
          <ProfileDetails
            otherUser={otherUser}
            editProfileModelHandler={editProfileModelHandler}
          />
          <Tabs>
            <h2>Posts</h2>
            <h2>Likes</h2>
            <h2>Replies</h2>
          </Tabs>
        </div>
      ) : (
        <ProfileDetailsShimmer />
      )}
      {!isLoadingUserPosts && !isLoadingUserDetails ? (
        <div className="py-2 ">
          {otherUserPosts.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      ) : (
        <ShimmerPosts />
      )}

      <Modal
        isOpen={openEditProfileModel}
        onClose={editProfileModelHandler}
        title={"Edit Profile"}
      >
        <EditProfile editProfileModalHandler={editProfileModelHandler} />
      </Modal>
    </div>
  );
};

export default ProfilePage;
