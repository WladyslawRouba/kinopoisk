import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SearchMoviesRequest, MoviesListResponse  } from "@/common/types/tmdb";
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
        getTopRatedMovies: builder.query({
            query: () => ({
                url: "movie/top_rated",
                params: {
                    api_key: API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
        getUpcomingMovies: builder.query({
            query: () => ({
                url: "movie/upcoming",
                params: {
                    api_key: API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
        getNowPlayingMovies: builder.query({
            query: () => ({
                url: "movie/now_playing",
                params: {
                    api_key: API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
        searchMovies: builder.query<MoviesListResponse , SearchMoviesRequest>({
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


export const {
    useGetPopularMoviesQuery,
    useSearchMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} = tmdbApi;