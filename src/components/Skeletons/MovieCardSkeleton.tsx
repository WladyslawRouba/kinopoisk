import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export const MovieCardSkeleton = () => {
    return (
        <Box sx={{ width: "180px" }}>
            <Skeleton
                variant="rectangular"
                width={180}
                height={270}
                sx={{ borderRadius: "12px" }}
            />
            <Skeleton variant="text" width="60%" sx={{ mt: 1 }} />
        </Box>
    );
};
