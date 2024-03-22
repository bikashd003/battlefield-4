import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

