export const sortPosts = (data, sortBy) => {
  if (sortBy === "TRENDING") {
    return data?.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  } else if (sortBy === "RECENT") {
    return data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
};

export const userFollowingPosts = (data, user) => {
  return data?.filter(
    (post) =>
      post.userId === user?._id ||
      user?.following?.some((ele) => ele._id === post.userId)
  );
};

export const isFollowing = (data, id) => {
  const isAvailable = data?.find((ele) => ele._id === id);
  if (isAvailable) {
    return true;
  } else {
    return false;
  }
};

export const recentComments = (comments) => {
  return comments?.sort(
    (a, b) => new Date(b.commentDate) - new Date(a.commentDate)
  );
};
