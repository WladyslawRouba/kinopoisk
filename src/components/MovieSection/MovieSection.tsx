import styles from "./MovieSection.module.css";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import type { Movie } from "@/common/types/movie";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
    movies?: Movie[];
    link: string;
}

export const MovieSection = ({ title, movies, link }: Props) => {
    const navigate = useNavigate();

    // ✔ безопасное значение
    const safeMovies = movies ?? [];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>

                <button
                    className={styles.viewMoreBtn}
                    onClick={() => navigate(link)}
                >
                    View more
                </button>
            </div>

            <div className={styles.grid}>
                {safeMovies.slice(0, 6).map((m) => (
                    <MovieCard key={m.id} movie={m} />
                ))}
            </div>
        </section>
    );
};
