import { useGetMoviesByCategoryQuery } from "@/features/api/mdbApi";
import type { CategoryKey } from "./categoriesMap";

export const useCategoryQuery = (type: CategoryKey, page: number) => {
    return useGetMoviesByCategoryQuery({ category: type, page });
};
