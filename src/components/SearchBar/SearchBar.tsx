import styles from "@/components/SearchBar/SearchBar.module.css";

interface Props {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

export const SearchBar = ({ value, onChange, onSearch }: Props) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };

    return (
        <div className={styles.searchRow}>
            <input
                type="search"
                className={styles.searchInput}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search for a movie"
            />

            <button
                className={styles.searchBtn}
                disabled={!value.trim()}
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    );
};
