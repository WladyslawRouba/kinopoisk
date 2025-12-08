

export const CATEGORIES = {
    popular: "Popular Movies",
    top_rated: "Top Rated Movies",
    upcoming: "Upcoming Movies",
    now_playing: "Now Playing Movies",
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
