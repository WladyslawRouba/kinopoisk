import { configureStore } from '@reduxjs/toolkit';
import {appReducer} from "./appSlice";
import { tmdbApi } from "@/features/api/mdbApi.ts";

export const store = configureStore({
  reducer: {
      app: appReducer,
      [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;