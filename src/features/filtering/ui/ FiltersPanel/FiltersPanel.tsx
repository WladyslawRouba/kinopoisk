import styles from "./FiltersPanel.module.css";
import { SortSelect } from "@/features/filtering/ui/SortSelect";
import { RatingSlider } from "@/features/filtering/ui/RatingSlider/RatingSlider.tsx";
import { useGetGenresQuery } from "@/features/api/mdbApi";
import type { Genre } from "@/common/types/tmdb";

interface Props {
    sort: string;
    setSort: (value: string) => void;

    rating: [number, number];
    setRating: (value: [number, number]) => void;

    genres: number[];
    onToggleGenre: (id: number) => void;

    onReset: () => void;
}

export const FiltersPanel = ({
                                 sort,
                                 setSort,
                                 rating,
                                 setRating,
                                 genres,
                                 onToggleGenre,
                                 onReset,
                             }: Props) => {
    const { data } = useGetGenresQuery(undefined);
    const allGenres = data?.genres ?? [];

    return (
        <div className={styles.panel}>
            <h3 className={styles.title}>Filters / Sort</h3>


            <div className={styles.block}>
                <label className={styles.label}>Sort by</label>
                <SortSelect sort={sort} setSort={setSort} />
            </div>


            <div className={styles.block}>
                <label className={styles.label}>Rating</label>
                <span className={styles.rangeText}>
                    {rating[0].toFixed(1)} – {rating[1].toFixed(1)}
                </span>
                <RatingSlider rating={rating} onChange={setRating} />
            </div>


            <div className={styles.genresBox}>
                {allGenres.map((g: Genre) => (
                    <button
                        key={g.id}
                        onClick={() => onToggleGenre(g.id)}
                        className={
                            genres.includes(g.id)
                                ? styles.genreActive
                                : styles.genre
                        }
                    >
                        {g.name}
                    </button>
                ))}
            </div>


            <button className={styles.resetBtn} onClick={onReset}>
                Reset filters
            </button>
        </div>
    );
};
