import React from "react";
import { usePosts } from "../../context";
import { Post, PostsShimmerLoader } from "../../components";
import { useScrollToTop } from "../../hooks";

const ExplorePage = () => {
  const { posts } = usePosts();
  useScrollToTop();

  return (
    <div>
      {posts?.all?.length === 0 ? (
        <>
          {[...Array(4)].map((_, idx) => (
            <PostsShimmerLoader key={idx} />
          ))}
        </>
      ) : (
        <>
          {posts?.all?.map((post) => (
            <Post {...post} key={post._id} />
          ))}
          <p className=" text-gray-600 text-lg text-center py-2 font-semibold  ">
            You have reached the end
          </p>
        </>
      )}
    </div>
  );
};

export default ExplorePage;
