import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TReop } from 'types/search.types';

// Define a type for the slice state
interface IRepo {
  repos: [] | TReop;
}

// Define the initial state using that type
const initialState = {
  repos: [] as IRepo['repos'],
};

export const repoSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getRepo: (state, action: PayloadAction<IRepo>) => {
      state.repos = action.payload.repos;
    },
  },
});

export const { getRepo } = repoSlice.actions;

export default repoSlice.reducer;
