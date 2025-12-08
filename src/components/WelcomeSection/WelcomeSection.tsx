import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "@/components/WelcomeSection/WelcomeSection.module.css";

import { SearchBar } from "@/components/SearchBar/SearchBar";
import { useGetPopularMoviesQuery } from "@/features/api/mdbApi";
import { getRandomIndex } from "@/common/utils/getRandomIndex";
import type { Movie } from "@/common/types/movie";

export const WelcomeSection = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const { data } = useGetPopularMoviesQuery({ page: 1 });

    const backdrop = useMemo(() => {
        if (!data?.results) return "";
        const arr = data.results.filter((m: Movie) => m.backdrop_path);
        if (!arr.length) return "";
        const index = getRandomIndex(arr.length);
        return `https://image.tmdb.org/t/p/original${arr[index].backdrop_path}`;
    }, [data]);

    const handleSearch = () => {
        if (!search.trim()) return;
        navigate(`/search?query=${search.trim()}&page=1`);
    };

    return (
        <section
            className={styles.wrapper}
            style={{ backgroundImage: `url(${backdrop})` }}
        >
            <div className={styles.overlay}>
                <h1 className={styles.title}>Welcome to Kino</h1>
                <p className={styles.subtitle}>Discover popular movies</p>

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    onSearch={handleSearch}

                />
            </div>
        </section>
    );
};
