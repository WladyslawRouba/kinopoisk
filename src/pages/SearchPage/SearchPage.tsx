import styles from "./SearchPage.module.css";
import Pagination from "@mui/material/Pagination";
import type { Movie } from "@/common/types/movie";
import { useSearchMoviesLogic } from "@/features/search/useSearchMoviesLogic";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { SearchSkeleton } from "./SearchSkeleton";

export const SearchPage = () => {
    const {
        inputValue,
        onInputChange,
        onSearch,
        onPageChange,
        query,
        pageFromUrl,
        data,
        isLoading,
    } = useSearchMoviesLogic();

    const isQueryEmpty = query.trim() === "";
    const noResults = data && data.results?.length === 0;

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Search Results</h2>


            <div className={styles.searchRow}>
                <input
                    type="search"
                    className={styles.searchInput}
                    value={inputValue}
                    placeholder="Search for a movie"
                    onChange={(e) => onInputChange(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSearch()}
                />

                <button
                    className={styles.searchBtn}
                    disabled={!inputValue.trim()}
                    onClick={onSearch}
                >
                    Search
                </button>
            </div>


            {isQueryEmpty && (
                <div className={styles.message}>
                    Enter a movie title to start searching
                </div>
            )}


            {isLoading && !isQueryEmpty && (
                <SearchSkeleton />
            )}


            {noResults && !isLoading && (
                <div className={styles.message}>
                    No matches found for "{query}"
                </div>
            )}


            {!isLoading && !isQueryEmpty && !noResults && (
                <>
                    <h3 className={styles.subtitle}>Results for "{query}"</h3>

                    <div className={styles.grid}>
                        {data?.results?.map((movie: Movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        <Pagination
                            count={Math.min(data?.total_pages ?? 0, 500)}
                            page={pageFromUrl}
                            onChange={(_, page) => onPageChange(page)}
                            color="primary"
                        />
                    </div>
                </>
            )}
        </div>
    );
};
