import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice';
import questionReducer from '../features/questionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    question : questionReducer,
  },
});
