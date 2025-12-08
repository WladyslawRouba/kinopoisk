import styles from "./SortSelect.module.css";

interface Props {
    sort: string;
    setSort: (value: string) => void;
}

export const SortSelect = ({ sort, setSort }: Props) => {
    return (
        <select
            className={styles.select}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
        >
            <option value="popularity.desc">Popularity ↓</option>
            <option value="popularity.asc">Popularity ↑</option>

            <option value="vote_average.desc">Rating ↓</option>
            <option value="vote_average.asc">Rating ↑</option>

            <option value="primary_release_date.desc">Release Date ↓</option>
            <option value="primary_release_date.asc">Release Date ↑</option>

            <option value="original_title.asc">Title A–Z</option>
            <option value="original_title.desc">Title Z–A</option>
        </select>
    );
};
