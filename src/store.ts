import { configureStore } from '@reduxjs/toolkit';

import { headerReducer } from './modules/Header';
import { articleReducer } from './pages/ArticlePage';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    header: headerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
