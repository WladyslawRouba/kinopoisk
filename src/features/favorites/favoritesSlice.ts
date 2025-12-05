import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "@/common/types/movie";

interface FavoritesState {
    items: Movie[];
}

const initialState: FavoritesState = {
    items: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<Movie>) {
            const exists = state.items.find(m => m.id === action.payload.id);

            if (exists) {
                state.items = state.items.filter(m => m.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem("favorites", JSON.stringify(state.items));
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
