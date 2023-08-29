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
import { useAuth, usePosts, useUsers } from "../../context";
import { useScrollToTop } from "../../hooks";
import { getPostsByUserName, getUsersDetailsByUsername } from "../../services";
import {
  EDIT_PROFILE_MODAL,
  SET_OTHER_USER_POSTS
} from "../../reducer/actions/actions";

const ProfilePage = () => {
  const [isLoadingUserDetails, setIsLoadingUserDetails] = useState(false);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  const {
    user: { otherUser },
    dispatchUser
  } = useUsers();
  const {
    posts: { otherUserPosts },
    modal: { editProfile },
    dispatchModal,
    dispatchPosts
  } = usePosts();
  const { currUser } = useAuth();
  const { userId } = useParams();
  useScrollToTop();
  const fetchUserDetails = async () => {
    await getUsersDetailsByUsername(
      userId,
      dispatchUser,
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

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  useEffect(() => {
    fetchUserPosts();
  }, [otherUser]);

  return (
    <div>
      {!isLoadingUserDetails && otherUser ? (
        <div className="bg-white dark:text-[color:var(--text-color)] dark:bg-[color:var(--secondary-dark-color)] shadow-md rounded-md overflow-hidden ">
          <ProfileDetails
            otherUser={userId === currUser._id ? currUser : otherUser}
          />
          {/* <Tabs>
            <h2>Posts</h2>
            <h2>Likes</h2>
            <h2>Replies</h2>
          </Tabs> */}
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
        isOpen={editProfile}
        onClose={() => dispatchModal({ type: EDIT_PROFILE_MODAL })}
        title={"Edit Profile"}
      >
        <EditProfile />
      </Modal>
    </div>
  );
};

export default ProfilePage;
