import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import { apiSlice } from './services/apiSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
