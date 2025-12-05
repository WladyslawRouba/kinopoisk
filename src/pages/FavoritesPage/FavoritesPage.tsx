import { useAppSelector } from "@/common/hooks";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import styles from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
    const favorites = useAppSelector(state => state.favorites.items);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Favorites</h1>

            <h2 className={styles.subTitle}>Favorite Movies</h2>

            {favorites.length === 0 ? (
                <p className={styles.empty}>You have no favorite movies yet ❤️</p>
            ) : (
                <div className={styles.grid}>
                    {favorites.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};
