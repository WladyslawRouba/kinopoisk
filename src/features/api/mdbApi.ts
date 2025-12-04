import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SearchMoviesRequest, SearchMoviesResponse } from "@/common/types/tmdb";
const API_KEY = import.meta.env.VITE_API_KEY;

export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3/",
    }),

    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => ({
                url: "movie/popular",
                params: {
                    api_key: API_KEY,
                    language: "en-US",
                    page: 1,},
            }),
        }),
        searchMovies: builder.query<SearchMoviesResponse, SearchMoviesRequest>({
            query: ({ query, page }) => ({
                url: "search/movie",
                params: {
                    api_key: API_KEY,
                    language: "en-US",
                    query,
                    page,
                },
            }),
        }),
    }),
});


export const { useGetPopularMoviesQuery, useSearchMoviesQuery } = tmdbApi;