import type { Movie } from "@/common/types/movie.ts";

export interface MoviesListResponse  {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface SearchMoviesRequest {
    query: string;
    page?: number;
}

export interface Genre {
    id: number;
    name: string;
}
export interface GenresResponse {
    genres: Genre[];
}
