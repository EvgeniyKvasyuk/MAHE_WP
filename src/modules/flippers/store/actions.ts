import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetch } from '@common/fetch';

export const getFlippers = createAsyncThunk('flippers/fetchFlippers', async (_, { rejectWithValue }) => {
  try {
    const data = await fetch.get({ url: '/flippers' });
    const res = await data.response;

    return res?.data?.data?.attributes ?? [];
  } catch (error) {
    return rejectWithValue(error);
  }
});
