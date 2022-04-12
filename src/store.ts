import { configureStore } from '@reduxjs/toolkit';

import { headerReducer } from './modules/Header';
import { messagesReducer } from './modules/Messages';
import { flippersReducer } from './modules/flippers';
import { articleReducer } from './pages/ArticlePage';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    header: headerReducer,
    messages: messagesReducer,
    flippers: flippersReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
