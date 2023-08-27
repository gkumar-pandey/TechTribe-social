import {
  signupReducer,
  loginReducer,
  loginInitialState,
  signupInitialState,
  currUserReducer
} from "./auth-reducer/auth-reducer";
import {
  postsInitialState,
  PostsReducer,
  modalInitialState,
  modalReducer
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
  currUserReducer,
  modalInitialState,
  modalReducer
};

export * from "./actions/actions";
