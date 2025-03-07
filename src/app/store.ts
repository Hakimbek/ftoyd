import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice.ts';
import filterReducer from './filterSlice.ts';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
