import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
    page: number;
    sort: string;
    rating: [number, number];
    genres: number[];
}

const initialState: FiltersState = {
    page: 1,
    sort: "popularity.desc",
    rating: [0, 10],
    genres: [],
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        },
        setRating(state, action: PayloadAction<[number, number]>) {
            state.rating = action.payload;
        },
        toggleGenre(state, action: PayloadAction<number>) {
            const id = action.payload;
            if (state.genres.includes(id)) {
                state.genres = state.genres.filter((g) => g !== id);
            } else {
                state.genres.push(id);
            }
        },
        resetFilters() {
            return initialState;
        }
    },
});

export const {
    setPage,
    setSort,
    setRating,
    toggleGenre,
    resetFilters
} = filterSlice.actions;

export default filterSlice.reducer;
