import React from "react";
import { useLocation, useParams } from "react-router-dom";

import ProfilePage from "../profile/ProfilePage";
import PostPage from "../post/PostPage";
import BookmarkPage from "../bookmark/Bookmark";
import {
  Grid,
  RightSideBar,
  LeftSideBar,
  Container,
  NavigationBar,
  Modal,
  PostModalTitle
} from "../../components";
import FeedPage from "../feed-page/feed-page";
import ExplorePage from "../explore-page/explore-page";
import { SearchPage } from "../search-page/search-page";
import EditPostFrom from "../../components/Form/PostForm/EditPostFrom";
import { usePosts } from "../../context";
import { EDIT_POST_MODAL } from "../../reducer";

const HomePage = () => {
  const location = useLocation();
  const { userId } = useParams();
  const { postId } = useParams();
  const {
    modal: { editPost },
    dispatchModal
  } = usePosts();

  const isFeedPage = location.pathname === "/";
  const isProfilePage = location.pathname === `/profile/${userId}`;
  const isExplorePage = location.pathname === "/explore";
  const isBookmarksPage = location.pathname === "/bookmarks";
  const isSearchPage = location.pathname === "/search";
  const isPostPage = location.pathname === `/post/${postId}`;

  return (
    <div className="bg-slate-50 dark:bg-[color:var(--dark-color)] py-8 min-h-screen">
      <Container>
        <div className="px-2 sm:px-0 relative">
          <Grid>
            <div>
              <LeftSideBar />
            </div>
            <div className=" w-full min-h-screen px-2 ">
              <div className="max-w-[40rem] mx-auto ">
                {isFeedPage && <FeedPage />}
                {isProfilePage && <ProfilePage />}
                {isPostPage && <PostPage />}
                {isExplorePage && <ExplorePage />}
                {isBookmarksPage && <BookmarkPage />}
                {isSearchPage && <SearchPage />}
              </div>
            </div>

            {(isFeedPage || isExplorePage || isSearchPage) && (
              <div className=" flex  flex-col   items-end md:hidden  ">
                <RightSideBar />
              </div>
            )}
          </Grid>
        </div>
      </Container>
      <Modal
        isOpen={editPost}
        title={<PostModalTitle />}
        onClose={() => dispatchModal({ type: EDIT_POST_MODAL })}
      >
        <EditPostFrom />
      </Modal>
    </div>
  );
};

export default HomePage;
