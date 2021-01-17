import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddleware, ...getDefaultMiddleware()],
});

export default store;
