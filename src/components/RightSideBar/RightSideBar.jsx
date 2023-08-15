import React from "react";

import Input from "../Input/Input";
import ProfileTile from "../Profile/ProfileTile/ProfileTile";
import { useAuth, useUsers } from "../../context";
import { ShimmerProfileTile } from "../Loader/Loader";

const ProfileLoader = () => {
  return [...Array(5)].map((_, idx) => <ShimmerProfileTile key={idx} />);
};

const RightSideBar = () => {
  const { user } = useAuth();
  const {
    usersState: { suggestedUsers }
  } = useUsers();

  return (
    <div className=" sm:hidden flex flex-col items-center  w-full xl:w-5/6 sticky top-24 border rounded-md shadow-md bg-white py-4 ">
      <div>
        <Input type="search" placeholder={"Search"} />
      </div>

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
