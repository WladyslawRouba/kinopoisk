import { useLocation, useNavigate } from "react-router-dom";
import { useSearchMoviesQuery } from "@/features/api/mdbApi";
import { useState } from "react";

export const useSearchMoviesLogic = () => {
    const navigate = useNavigate();
    const { search } = useLocation();

    const params = new URLSearchParams(search);
    const query = params.get("query") || "";
    const pageFromUrl = Number(params.get("page")) || 1;

    const [inputValue, setInputValue] = useState(query);

    const { data, isLoading } = useSearchMoviesQuery(
        { query, page: pageFromUrl },
        { skip: !query }
    );

    const onInputChange = (value: string) => {
        setInputValue(value);

        if (value === "") {
            navigate("/search");
        }
    };

    const onSearch = () => {
        if (!inputValue.trim()) return;
        navigate(`/search?query=${inputValue.trim()}&page=1`);
    };

    const onPageChange = (newPage: number) => {
        navigate(`/search?query=${query}&page=${newPage}`);
    };

    return {
        inputValue,
        onInputChange,
        onSearch,
        onPageChange,
        query,
        pageFromUrl,
        data,
        isLoading,
    };
};
