import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
export interface AuthState {
  isAuthenticated: boolean;
  userName: string;
  fullName: string;
  email: string;
  userId: string;
  userMongoId: string;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  userName: '',
  fullName: '',
  email: '',
  userId: '',
  userMongoId: '',
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{
        userName: string;
        fullName: string;
        email: string;
        userId: string;
        userMongoId: string;
      }>
    ) => {
      state.isAuthenticated = true;
      state.userName = action.payload.userName;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.userMongoId = action.payload.userMongoId;
    },
    clearUserInfo: state => {
      state.isAuthenticated = false;
      state.userName = '';
      state.fullName = '';
      state.email = '';
      state.userId = '';
      state.userMongoId = '';
    },
  },
});

// Export actions
export const { setUserInfo, clearUserInfo } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuthenticated;
export const selectUserInfo = (state: { auth: AuthState }) => ({
  userName: state.auth.userName,
  fullName: state.auth.fullName,
  email: state.auth.email,
  userId: state.auth.userId,
  userMongoId: state.auth.userMongoId,
});
