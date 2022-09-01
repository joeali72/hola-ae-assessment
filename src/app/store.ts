import { configureStore } from '@reduxjs/toolkit';
import repoSlice from './repo/repoSlice';
import usersSlice from './users/userSlice';
// ...

export const store = configureStore({
  reducer: {
    users: usersSlice,
    repos: repoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
