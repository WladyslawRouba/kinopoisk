import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const MovieDetailsSkeleton = () => {
    return (
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>

            <Skeleton
                variant="rectangular"
                width={300}
                height={450}
                sx={{ borderRadius: "12px" }}
            />

            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                <Skeleton variant="text" width="60%" height={40} />
                <Skeleton variant="text" width="40%" height={30} />

                <Skeleton variant="rectangular" width="100%" height={120} />

                <Skeleton variant="text" width="50%" height={30} />
                <Skeleton variant="text" width="30%" height={30} />
            </Box>
        </Box>
    );
};
