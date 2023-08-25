import { useEffect, useState } from "react";
import { Loader, SearchInput, SpinLoader } from "../../components";
import axios from "axios";
import { useDebounce } from "../../hooks";
import ProfileTile from "../../components/Profile/ProfileTile/ProfileTile";
import { useUsers } from "../../context";

export const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const {
    user: { suggestedUsers }
  } = useUsers();

  const searchQuery = useDebounce(inputValue, 300);

  const searchUser = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(
        `/api/users/search/?search=${searchQuery}`
      );
      if (status === 200) {
        setUsers(data?.users);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      searchUser();
    } else {
      setUsers([]);
    }
  }, [searchQuery]);

  const onChangeHandler = (e) => {
    setIsLoading(true);
    setInputValue(e.target.value);
  };

  return (
    <div className=" bg-white min-h-screen ">
      <div className=" text-2xl font-bold text-center text-green-700 p-4 ">
        <h2>Search your friends</h2>
      </div>
      <div className="p-2">
        <SearchInput value={inputValue} onchange={onChangeHandler} />
      </div>
      {searchQuery === "" && users.length === 0 ? (
        <div className="w-3/4 mx-auto ">
          {suggestedUsers?.map((ele) => (
            <ProfileTile {...ele} key={ele._id} />
          ))}
        </div>
      ) : (
        <>
          {isLoading && inputValue ? (
            <div className="mx-auto flex items-center justify-center py-4 gap-4 text-xl font-semibold text-gray-800 ">
              <Loader /> <span>Searching for "{inputValue}"</span>
            </div>
          ) : (
            <div className="w-3/4 m-auto">
              <>
                {users.length === 0 ? (
                  <div className="mx-auto flex items-center justify-center py-4 gap-4 text-xl font-semibold text-gray-800">
                    No result found with "{inputValue}"
                  </div>
                ) : (
                  <>
                    {" "}
                    {users.map((ele) => (
                      <ProfileTile {...ele} key={ele._id} />
                    ))}
                  </>
                )}
              </>
            </div>
          )}
        </>
      )}
    </div>
  );
};
