import { configureStore } from "@reduxjs/toolkit";
import userRequests from "../features/getUserRequestsSlice";
import userProjects from "../features/getUserProjectsSlice";
import allApartments from "../features/getAllApartmentsSlice";

export const store = configureStore({
  reducer: { userRequests, userProjects, allApartments },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
