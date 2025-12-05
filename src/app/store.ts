import { configureStore } from '@reduxjs/toolkit';
import {appReducer} from "./appSlice";
import { tmdbApi } from "@/features/api/mdbApi.ts";
import favoritesReducer from "@/features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
      app: appReducer,
      favorites: favoritesReducer,
      [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;