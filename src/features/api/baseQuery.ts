import {
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { setError } from "@/app/errorSlice";

const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders(headers) {
        headers.set("Authorization", `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`);
        return headers;
    },
});


export const customBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);



    if (result.error) {
        switch (result.error.status) {
            case "FETCH_ERROR":
                api.dispatch(setError("Network error. Please check your connection."));
                break;

            case 401:
                api.dispatch(setError("Invalid AUTH_TOKEN. Please check your API key."));
                break;

            case 404:
                api.dispatch(setError("Resource not found (404)."));
                break;

            default:
                api.dispatch(setError("Unexpected error occurred."));
        }
    }

    return result;
};
