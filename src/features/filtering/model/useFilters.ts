import { useAppDispatch, useAppSelector } from "@/common/hooks";
import {
    setPage,
    setSort,
    setRating,
    toggleGenre,
    resetFilters
} from "./filterSlice";

export const useFilters = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.filters);

    return {
        ...filters,

        setPage: (v: number) => dispatch(setPage(v)),
        setSort: (v: string) => dispatch(setSort(v)),
        setRating: (v: [number, number]) => dispatch(setRating(v)),
        toggleGenre: (id: number) => dispatch(toggleGenre(id)),
        resetFilters: () => dispatch(resetFilters()),
    };
};
