import { useParams, useNavigate } from "react-router-dom";
import {
    useGetMovieDetailsQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery,
} from "@/features/api/mdbApi";

import styles from "./MovieDetailsPage.module.css";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { MovieDetailsSkeleton } from "@/components/Skeletons";

const getPosterUrl = (path: string | null, size = "w500") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : "/no-poster.png";

const getProfileUrl = (path: string | null) =>
    path ? `https://image.tmdb.org/t/p/w185${path}` : "/no-profile.png";

export const MovieDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movieId = Number(id);

    const {
        data: movie,
        isLoading: isMovieLoading,
        isError: isMovieError,
    } = useGetMovieDetailsQuery(movieId);

    const { data: credits } = useGetMovieCreditsQuery({ movieId });
    const { data: similar } = useGetSimilarMoviesQuery(movieId);


    if (isMovieError) {
        return <p className={styles.error}>Failed to load movie details.</p>;
    }


    if (isMovieLoading) {
        return (
            <div className={styles.page}>
                <MovieDetailsSkeleton />
            </div>
        );
    }


    if (!movie) {
        return <p className={styles.error}>Movie not found.</p>;
    }

    const cast = credits?.cast.slice(0, 6) ?? [];
    const similarMovies = similar?.results.slice(0, 6) ?? [];


    return (
        <div className={styles.page}>

            <button className={styles.back} onClick={() => navigate(-1)}>
                ← Back
            </button>


            <div className={styles.topBlock}>
                <img
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className={styles.poster}
                />

                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>

                    <div className={styles.meta}>
                        <span>{movie.release_date.slice(0, 4)}</span>
                        <span className={styles.rating}>
                            {movie.vote_average.toFixed(1)}
                        </span>
                        <span>{movie.runtime} min</span>
                    </div>

                    <p className={styles.overview}>{movie.overview}</p>

                    <div className={styles.genres}>
                        {movie.genres.map((g) => (
                            <span className={styles.genre} key={g.id}>
                                {g.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <section className={styles.castSection}>
                <h2>Cast</h2>

                <div className={styles.castGrid}>
                    {cast.map((actor) => (
                        <div key={actor.id} className={styles.actorCard}>
                            <img
                                src={getProfileUrl(actor.profile_path)}
                                alt={actor.name}
                                className={styles.actorPhoto}
                            />
                            <p className={styles.actorName}>{actor.name}</p>
                            <p className={styles.actorCharacter}>
                                {actor.character}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            <section className={styles.similarSection}>
                <h2>Similar Movies</h2>

                <div className={styles.similarGrid}>
                    {similarMovies.length === 0 && (
                        <p>No similar movies found.</p>
                    )}

                    {similarMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
};
