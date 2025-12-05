import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { toggleFavorite } from "./favoritesSlice";
import type { Movie } from "@/common/types/movie";

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);

    const isFavorite = (id: number) =>
        favorites.some(m => m.id === id);

    const toggle = (movie: Movie) => {
        dispatch(toggleFavorite(movie));
    };

    return { favorites, isFavorite, toggle };
};
