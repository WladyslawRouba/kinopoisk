import { MovieCard } from "@/components/MovieCard/MovieCard";
import styles from "./MoviesGrid.module.css";
import type { Movie } from "@/common/types/movie";

interface Props {
    movies: Movie[];
    loading?: boolean;
}

export const MoviesGrid = ({ movies }: Props) => {
    return (
        <div className={styles.grid}>
            {movies.map((m) => (
                <MovieCard key={m.id} movie={m} />
            ))}
        </div>
    );
};
