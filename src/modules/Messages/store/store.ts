import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusEnum } from '@common/constants';

import { getUnreadMessagesCount } from './actions';
import { MessagesState } from './types';

const initialState: MessagesState = {
  unreadMessages: {
    count: 0,
    status: StatusEnum.Uninitialized,
    error: {},
  },
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: {
    [getUnreadMessagesCount.pending.type]: (state: MessagesState) => {
      state.unreadMessages.status = StatusEnum.Pending;
    },
    [getUnreadMessagesCount.fulfilled.type]: (state: MessagesState, action: PayloadAction<number>) => {
      state.unreadMessages.status = StatusEnum.Fulfilled;
      state.unreadMessages.count = action.payload;
    },
    [getUnreadMessagesCount.rejected.type]: (state: MessagesState) => {
      /** TODO-Samanth Accurate Error-Handling */
      state.unreadMessages.status = StatusEnum.Rejected;
    },
  },
});

export const messagesReducer = messagesSlice.reducer;
