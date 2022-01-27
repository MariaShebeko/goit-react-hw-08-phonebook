import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
