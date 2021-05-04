import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  authReducer,
  errorReducer,
  postsReducer,
  userReducer,
});
