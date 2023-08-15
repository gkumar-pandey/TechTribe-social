import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import {
  UsersInitialState,
  UsersReducer
} from "../../reducer/user-reducer/user-reducer";
import {
  UnfollowUserService,
  followUserService,
  getAllUsers
} from "../../services";
import { useAuth } from "../auth-context/auth-context";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [usersState, dispatchUsers] = useReducer(
    UsersReducer,
    UsersInitialState
  );
  const [otherUser, setOtherUser] = useState("");
  const { dispatchCurrUser } = useAuth();

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const fetchAllUsers = async () => {
    await getAllUsers(dispatchUsers);
  };

  const followBtnHandler = async (followUserId) => {
    await followUserService(
      followUserId,
      token,
      dispatchCurrUser,
      setOtherUser
    );
  };

  const unfollowBtnHandler = async (followUserId) => {
    await UnfollowUserService(
      followUserId,
      token,
      dispatchCurrUser,
      setOtherUser
    );
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <UserContext.Provider
      value={{
        usersState,
        dispatchUsers,
        followBtnHandler,
        unfollowBtnHandler,
        otherUser,
        setOtherUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
