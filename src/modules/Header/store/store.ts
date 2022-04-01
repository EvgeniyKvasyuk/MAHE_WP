import { createSlice } from '@reduxjs/toolkit';

export interface HeaderState {
  mainMenuOpen: boolean;
}

const initialState: HeaderState = {
  mainMenuOpen: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    mainMenuToggle: (state) => {
      state.mainMenuOpen = !state.mainMenuOpen;
    },
  },
});

export const { mainMenuToggle } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
