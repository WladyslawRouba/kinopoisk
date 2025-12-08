import styles from "./MovieCard.module.css";
import type { Movie } from "@/common/types/movie";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/common/hooks/";
import { toggleFavorite } from "@/features/favorites/favoritesSlice";
import { getRatingColor } from "@/common/utils/getRatingColor.ts";

interface Props {
    movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
    const dispatch = useAppDispatch();


    const isFavorite = useAppSelector(state =>
        Boolean( state.favorites.items.find(m => m.id === movie.id))
    );

    const img = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-poster.png";

    return (
        <div className={styles.card}>
            <div className={styles.posterWrapper}>
                <Link to={`/movie/${movie.id}`}>
                    <img src={img} alt={movie.title} className={styles.poster} />
                </Link>

                <span className={styles.rating}
                      style={{ backgroundColor: getRatingColor(movie.vote_average) }}
                >

                    {movie.vote_average.toFixed(1)}
                </span>


                <button
                    className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ""}`}
                    onClick={() => dispatch(toggleFavorite(movie))}
                >

                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>

            <div className={styles.info}>
                <p className={styles.title}>{movie.title}</p>
            </div>
        </div>
    );
};
