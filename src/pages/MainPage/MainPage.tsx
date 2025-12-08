import { WelcomeSection } from "@/components/WelcomeSection/WelcomeSection";
import { MovieSection } from "@/components/MovieSection/MovieSection";
import { MovieGridSkeleton } from "@/components/Skeletons";

import {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} from "@/features/api/mdbApi";

export const MainPage = () => {
    const popularQuery = useGetPopularMoviesQuery({ page: 1 });
    const topRatedQuery = useGetTopRatedMoviesQuery({ page: 1 });
    const upcomingQuery = useGetUpcomingMoviesQuery({ page: 1 });
    const nowPlayingQuery = useGetNowPlayingMoviesQuery({ page: 1 });

    const isAnyLoading =
        popularQuery.isFetching ||
        topRatedQuery.isFetching ||
        upcomingQuery.isFetching ||
        nowPlayingQuery.isFetching;

    return (
        <>
            <WelcomeSection />

            <div className="layout">
                {isAnyLoading ? (
                    <MovieGridSkeleton />
                ) : (
                    <>
                        <MovieSection
                            title="Popular Movies"
                            movies={popularQuery.data?.results ?? []}
                            link="/category/popular"
                        />

                        <MovieSection
                            title="Top Rated Movies"
                            movies={topRatedQuery.data?.results ?? []}
                            link="/category/top_rated"
                        />

                        <MovieSection
                            title="Upcoming Movies"
                            movies={upcomingQuery.data?.results ?? []}
                            link="/category/upcoming"
                        />

                        <MovieSection
                            title="Now Playing Movies"
                            movies={nowPlayingQuery.data?.results ?? []}
                            link="/category/now_playing"
                        />
                    </>
                )}
            </div>
        </>
    );
};
