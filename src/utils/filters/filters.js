export const sortPosts = (data, sortBy) => {
  if (sortBy === "TRENDING") {
    return data?.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  } else if (sortBy === "RECENT") {
    return data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
};

export const userFollowingPosts = (data, user) => {
  const { _id, following } = user;

  return data?.filter(
    (post) =>
      post.userId === _id || following.some((ele) => ele._id === post.userId)
  );
};

export const isFollowing = (data, id) => {
  const isAvailable = data.find((ele) => ele._id === id);
  if (isAvailable) {
    return true;
  } else {
    return false;
  }
};
