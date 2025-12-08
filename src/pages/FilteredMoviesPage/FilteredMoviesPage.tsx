import { useFilters } from "@/features/filtering/model/useFilters";
import { useGetFilteredMoviesQuery } from "@/features/api/mdbApi";
import { FiltersPanel } from "@/features/filtering/ui/ FiltersPanel";
import { MoviesGrid } from "@/components/MoviesGrid/MoviesGrid.tsx";
import { PaginationBlock } from "@/components/PaginationBlock/PaginationBlock.tsx";
import { FilteredMoviesSkeleton } from "./FilteredMoviesSkeleton";

export const FilteredMoviesPage = () => {
    const {
        page,
        sort,
        rating,
        genres,
        setPage,
        setSort,
        setRating,
        toggleGenre,
        resetFilters
    } = useFilters();

    const { data, isLoading } = useGetFilteredMoviesQuery({
        page,
        sort_by: sort,
        vote_gte: rating[0],
        vote_lte: rating[1],
        with_genres: genres.join(",")
    });

    const movies = data?.results ?? [];
    const totalPages = data?.total_pages ?? 1;

    if (isLoading) return <FilteredMoviesSkeleton />;
    return (
        <div style={{ display: "flex", gap: "30px" }}>
            <FiltersPanel
                sort={sort}
                rating={rating}
                genres={genres}
                setSort={setSort}
                setRating={setRating}
                onToggleGenre={toggleGenre}
                onReset={resetFilters}
            />

            <div style={{ flex: 1 }}>
                <MoviesGrid movies={movies} loading={isLoading} />

                <PaginationBlock
                    page={page}
                    totalPages={totalPages}
                    onChange={setPage}

                />
            </div>
        </div>
    );
};
