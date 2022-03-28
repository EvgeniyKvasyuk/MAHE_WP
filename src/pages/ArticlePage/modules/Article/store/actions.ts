import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from './api';
import { incrementByAmount } from './store';

export const articleTestAction = createAsyncThunk(
  'article',
  async (data, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const data = await api();
      dispatch(incrementByAmount(5)); // example
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
