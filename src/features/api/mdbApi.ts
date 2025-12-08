import { createApi } from "@reduxjs/toolkit/query/react";
import type {
    MoviesListResponse,
    SearchMoviesRequest,
    GenresResponse
} from "@/common/types/tmdb";

import type { CategoryKey } from "@/pages/CategoryPage/model/categoriesMap";
import type { MovieDetailsResponse, CreditsResponse } from "@/common/types";

import { MovieDetailsSchema } from "@/common/validation/movieDetailsSchema";
import { customBaseQuery } from "@/features/api/baseQuery";

const BASE_PARAMS = { language: "en-US" };

export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: customBaseQuery,

    endpoints: (builder) => ({


       getPopularMovies: builder.query<MoviesListResponse, { page?: number }>({
            query: ({ page = 1 }) => ({
                url: "movie/popular",
                params: { ...BASE_PARAMS, page },
            }),
        }),
       /* getPopularMovies: builder.query({
            async queryFn({ page }, api, extra, baseQuery) {
                await new Promise((r) => setTimeout(r, 1500));
                return baseQuery({
                    url: "movie/popular",
                    params: { ...BASE_PARAMS, page },
                });
            },
        }),*/



        getMoviesByCategory: builder.query<
            MoviesListResponse,
            { category: CategoryKey; page: number }
        >({
            query: ({ category, page }) => ({
                url: `movie/${category}`,
                params: { ...BASE_PARAMS, page },
            }),
        }),


        getTopRatedMovies: builder.query<MoviesListResponse, { page?: number }>({
            query: ({ page = 1 }) => ({
                url: "movie/top_rated",
                params: { ...BASE_PARAMS, page },
            }),
        }),

        getUpcomingMovies: builder.query<MoviesListResponse, { page?: number }>({
            query: ({ page = 1 }) => ({
                url: "movie/upcoming",
                params: { ...BASE_PARAMS, page },
            }),
        }),

        getNowPlayingMovies: builder.query<MoviesListResponse, { page?: number }>({
            query: ({ page = 1 }) => ({
                url: "movie/now_playing",
                params: { ...BASE_PARAMS, page },
            }),
        }),


        searchMovies: builder.query<MoviesListResponse, SearchMoviesRequest>({
            query: ({ query, page = 1 }) => ({
                url: "search/movie",
                params: { ...BASE_PARAMS, query, page },
            }),
        }),

        getFilteredMovies: builder.query<
            MoviesListResponse,
            {
                page?: number;
                sort_by?: string;
                vote_gte?: number;
                vote_lte?: number;
                with_genres?: string;
            }
        >({
            query: ({
                        page = 1,
                        sort_by = "popularity.desc",
                        vote_gte = 0,
                        vote_lte = 10,
                        with_genres = "",
                    }) => ({
                url: "discover/movie",
                params: {
                    ...BASE_PARAMS,
                    page,
                    sort_by,
                    "vote_average.gte": vote_gte,
                    "vote_average.lte": vote_lte,
                    with_genres: with_genres || undefined,
                },
            }),
        }),


        getGenres: builder.query<GenresResponse, void>({
            query: () => ({
                url: "genre/movie/list",
                params: BASE_PARAMS,
            }),
        }),


        getMovieDetails: builder.query<MovieDetailsResponse, number>({
            query: (id) => ({
                url: `movie/${id}`,
                params: BASE_PARAMS,
            }),
            transformResponse: (response) => {
                const parsed = MovieDetailsSchema.safeParse(response);
                if (!parsed.success) {
                    throw new Error("Invalid movie details data");
                }
                return parsed.data;
            },
        }),

        getMovieCredits: builder.query<CreditsResponse, { movieId: number }>({
            query: ({ movieId }) => ({
                url: `movie/${movieId}/credits`,
                params: BASE_PARAMS,
            }),
        }),


        getSimilarMovies: builder.query<MoviesListResponse, number>({
            query: (id) => ({
                url: `movie/${id}/similar`,
                params: { ...BASE_PARAMS, page: 1 },
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
    useGetFilteredMoviesQuery,
    useGetGenresQuery,
    useGetMoviesByCategoryQuery,
    useGetMovieDetailsQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery,
} = tmdbApi;
