import Box from "@mui/material/Box";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

export const MovieGridSkeleton = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gap: "24px",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                padding: "20px 0"
            }}
        >
            {Array.from({ length: 12 }).map((_, i) => (
                <MovieCardSkeleton key={i} />
            ))}
        </Box>
    );
};
