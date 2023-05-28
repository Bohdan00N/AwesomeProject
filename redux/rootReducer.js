import { combineReducers } from "@reduxjs/toolkit";
import authSliceReducer from './auth/authSlice'
// import postsSliceReducer from "./posts/postsSlice";

const rootReducer = combineReducers({
  auth: authSliceReducer,
  // posts: postsSliceReducer,
});

export default rootReducer;