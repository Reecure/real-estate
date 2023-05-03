import { configureStore } from "@reduxjs/toolkit";
import userRequests from "../features/getUserRequestsSlice";

export const store = configureStore({
  reducer: { userRequests },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
