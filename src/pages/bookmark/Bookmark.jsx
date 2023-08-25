import React, { useEffect, useState } from "react";
import { usePosts } from "../../context";
import { Post, SpinLoader } from "../../components";
import { useScrollToTop } from "../../hooks";

const BookmarkPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    posts: { bookmarks },
    getBookmarksPosts
  } = usePosts();
  useScrollToTop();

  useEffect(() => {
    getBookmarksPosts(setIsLoading);
  }, []);

  return (
    <div>
      <div className=" text-2xl font-bold text-green-700 text-center p-2 my-1 ">
        <h1>Your Bookmarks </h1>
      </div>
      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          {bookmarks?.length === 0 ? (
            <div>
              <h2 className=" text-center text-xl text-gray-700 font-bold ">
                No Bookmark to show
              </h2>
            </div>
          ) : (
            <>
              {bookmarks.map((post) => (
                <Post {...post} key={post._id} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BookmarkPage;
