export interface MovieDetailsResponse {
    id: number;
    title: string;
    overview: string | null;
    runtime: number | null;
    vote_average: number;
    release_date: string;

    poster_path: string | null;
    backdrop_path: string | null;

    genres: { id: number; name: string }[];
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface CreditsResponse {
    id: number;
    cast: CastMember[];
}
