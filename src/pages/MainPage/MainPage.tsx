import { WelcomeSection } from "@/components/WelcomeSection/WelcomeSection";
import { MovieSection } from "@/components/MovieSection/MovieSection";

import {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} from "@/features/api/mdbApi";

export const MainPage = () => {
    const { data: popular }     = useGetPopularMoviesQuery({ page: 1 });
    const { data: topRated }    = useGetTopRatedMoviesQuery({ page: 1 });
    const { data: upcoming }    = useGetUpcomingMoviesQuery({ page: 1 });
    const { data: nowPlaying }  = useGetNowPlayingMoviesQuery({ page: 1 });

    return (
        <>
            <WelcomeSection />  {/* FULL WIDTH */}

            <div className="layout">
                <MovieSection
                    title="Popular Movies"
                    movies={popular?.results ?? []}
                    link="/category/popular"
                />

                <MovieSection
                    title="Top Rated Movies"
                    movies={topRated?.results ?? []}
                    link="/category/top_rated"
                />

                <MovieSection
                    title="Upcoming Movies"
                    movies={upcoming?.results ?? []}
                    link="/category/upcoming"
                />

                <MovieSection
                    title="Now Playing Movies"
                    movies={nowPlaying?.results ?? []}
                    link="/category/now_playing"
                />
            </div>
        </>
    );
};
