import { configureStore } from '@reduxjs/toolkit';
import {appReducer} from "./appSlice";
import { tmdbApi } from "@/features/api/mdbApi.ts";
import filtersReducer from "@/features/filtering/model/filterSlice";
import favoritesReducer from "@/features/favorites/favoritesSlice";
import { errorReducer } from "@/app/errorSlice";

export const store = configureStore({
  reducer: {
      app: appReducer,
      favorites: favoritesReducer,
      filters: filtersReducer,
      error: errorReducer,
      [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;