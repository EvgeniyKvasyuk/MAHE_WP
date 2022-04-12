import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetch } from '@common/fetch';

export const getUnreadMessagesCount = createAsyncThunk('messages/fetchUnreadCount', async (_, { rejectWithValue }) => {
  try {
    const data = await fetch.get({ url: '/messaging/unread' });
    const res = await data.response;

    return res?.data?.attributes?.unread_count;
  } catch (error) {
    /** TODO-Samanth Accurate Error-Handling */
    return rejectWithValue(error);
  }
});
