import { WelcomeSection } from "@/components/WelcomeSection/WelcomeSection.tsx";
import { MovieSection } from "@/components/MovieSection/MovieSection.tsx";
import {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} from "@/features/api/mdbApi";


export const MainPage = () => {

    const { data: popular } = useGetPopularMoviesQuery(null);
    const { data: topRated } = useGetTopRatedMoviesQuery(null);
    const { data: upcoming } = useGetUpcomingMoviesQuery(null);
    const { data: nowPlaying } = useGetNowPlayingMoviesQuery(null);


    return (
        <div>
            <WelcomeSection />

            <MovieSection
                title="Popular Movies"
                movies={popular?.results ?? []}
                link="/category/popular"
            />
            <MovieSection
                title="Top Rated"
                movies={topRated?.results}
                link="/category/top-rated"
            />

            <MovieSection
                title="Upcoming"
                movies={upcoming?.results}
                link="/category/upcoming"
            />

            <MovieSection
                title="Now Playing"
                movies={nowPlaying?.results}
                link="/category/now-playing"
            />
        </div>
    );
};
