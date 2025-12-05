export const getRatingColor = (rating: number) => {
    if (rating >= 7) return "#21d07a";
    if (rating >= 4) return "#d2d531";

    return "#db2360";
};
