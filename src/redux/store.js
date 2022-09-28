import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./Features/postSlice";
import UserReducer from "./Features/userSlice";

export default configureStore({
  reducer: {
    post: PostReducer,
    user: UserReducer,
  },
});
