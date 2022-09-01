import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TUsers } from 'types/search.types';

// Define a type for the slice state
interface IUsers {
  users: [] | TUsers;
}

// Define the initial state using that type
const initialState = {
  users: [] as IUsers['users'],
};

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getUsers: (state, action: PayloadAction<IUsers>) => {
      state.users = action.payload.users;
    },
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
