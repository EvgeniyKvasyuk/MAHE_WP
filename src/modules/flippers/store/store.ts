import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusEnum } from '@common/constants';

import { getFlippers } from './actions';
import { FlippersState, FlipperType } from './type';

const initialState: FlippersState = {
  flippers: {},
  status: StatusEnum.Uninitialized,
};

export const flippersSlice = createSlice({
  name: 'flippers',
  initialState,
  reducers: {},
  extraReducers: {
    [getFlippers.pending.type]: (state: FlippersState) => {
      state.status = StatusEnum.Pending;
    },
    [getFlippers.fulfilled.type]: (state: FlippersState, action: PayloadAction<Array<FlipperType>>) => {
      state.status = StatusEnum.Fulfilled;
      state.flippers = action.payload.reduce((acc, flipper) => {
        acc[flipper.key] = flipper;

        return acc;
      }, {} as Record<string, FlipperType>);
    },
    [getFlippers.rejected.type]: (state: FlippersState) => {
      state.status = StatusEnum.Rejected;
    },
  },
});

export const flippersReducer = flippersSlice.reducer;
