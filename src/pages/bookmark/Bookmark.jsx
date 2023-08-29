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
      <div className=" text-3xl font-bold text-[color:var(--primary-color)] text-center p-2 my-1 ">
        <h1>Your Bookmarks </h1>
      </div>
      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          {bookmarks?.length === 0 ? (
            <div>
              <h2 className=" text-center text-xl font-bold text-[color:var(--silent-text-color)] ">
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
