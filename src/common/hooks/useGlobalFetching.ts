import { useAppSelector } from "@/common/hooks";
import type { RootState } from "@/app/store";
import { QueryStatus } from "@reduxjs/toolkit/query";

export const useGlobalFetching = () => {
    return useAppSelector((state: RootState) => {
        const queries = state.tmdbApi.queries;

        return Object.values(queries).filter(
            (q) => q?.status === QueryStatus.pending
        ).length;
    });
};
