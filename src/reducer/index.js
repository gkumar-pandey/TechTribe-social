import {
  signupReducer,
  loginReducer,
  loginInitialState,
  signupInitialState,
  currUserReducer
} from "./auth-reducer/auth-reducer";
import {
  postsInitialState,
  PostsReducer
} from "./post-reducer/post-reducer.jsx";
import { userInitialState, userReducer } from "./user-reducer/user-reducer";

export {
  signupReducer,
  loginReducer,
  loginInitialState,
  signupInitialState,
  postsInitialState,
  PostsReducer,
  userInitialState,
  userReducer,
  currUserReducer
};

export * from "./actions/actions";
