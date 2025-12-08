

import { useParams } from "react-router-dom";
import { useState } from "react";
import { CATEGORIES, type CategoryKey } from "@/pages/CategoryPage/model/categoriesMap.ts";
import { useCategoryQuery } from "@/pages/CategoryPage/model/useCategoryQuery.ts";

import { MovieCard } from "@/components/MovieCard/MovieCard";
import { CategoryTabs } from "@/pages/CategoryPage/ui/CategoryTabs.tsx";
import { PaginationBlock } from "@/components/PaginationBlock/PaginationBlock.tsx";
import type { Movie } from "@/common/types/movie.ts";
import { MovieGridSkeleton } from "@/components/Skeletons";
import styles from "./CategoryPage.module.css";

export const CategoryPage = () => {
    const { type } = useParams();
    const category: CategoryKey = type && CATEGORIES[type as CategoryKey]
        ? (type as CategoryKey)
        : "popular";



    const [page, setPage] = useState(1);

    const { data, isLoading } = useCategoryQuery(category, page);

    const movies = data?.results ?? [];
    const totalPages = data?.total_pages ?? 1;
    if (isLoading) return <MovieGridSkeleton />;
    return (
        <div className={styles.wrapper}>
            <CategoryTabs active={category} onResetPage={() => setPage(1)} />

            <h2 className={styles.heading}>{CATEGORIES[category]}</h2>

            {isLoading && <div className={styles.loading}>Loading...</div>}

            <div className={styles.grid}>
                {movies.map((m: Movie) => (
                    <MovieCard key={m.id} movie={m} />
                ))}
            </div>


            <PaginationBlock
                page={page}
                totalPages={totalPages}
                onChange={setPage}

            />
        </div>
    );
};
