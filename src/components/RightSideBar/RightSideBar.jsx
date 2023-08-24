import React, { useEffect } from "react";
import ProfileTile from "../Profile/ProfileTile/ProfileTile";
import { ShimmerProfileTile } from "../Loader/Loader";
import { useUsers } from "../../context";

const ProfileLoader = () => {
  return [...Array(5)].map((_, idx) => <ShimmerProfileTile key={idx} />);
};

const RightSideBar = () => {
  const {
    user: { suggestedUsers },
    getAllUsers
  } = useUsers();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className=" sm:hidden flex flex-col items-center  w-full xl:w-5/6 sticky top-24 border rounded-md shadow-md bg-white py-4 ">
      <div className="text-start w-full px-4 py-2 text-xl font-semibold   ">
        <h2 className=" text-gray-800 ">Who to follow</h2>
      </div>
      <div>
        {suggestedUsers.length === 0 ? (
          <>
            <ProfileLoader />
          </>
        ) : (
          suggestedUsers.map((user) => <ProfileTile key={user._id} {...user} />)
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
