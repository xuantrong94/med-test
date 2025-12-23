import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import authReducer from './features/auth/authSlice';
import { apiSlice } from './services/apiSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
