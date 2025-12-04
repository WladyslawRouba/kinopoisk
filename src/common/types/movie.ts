export interface Movie {
    id: number;
    title: string;
    overview: string;

    backdrop_path: string | null;
    poster_path: string | null;

    release_date: string;
    vote_average: number;
    genre_ids?: number[];
    original_title?: string;
    original_language?: string;
    popularity?: number;

}
