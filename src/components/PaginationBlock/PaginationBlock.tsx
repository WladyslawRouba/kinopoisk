

import Pagination from "@mui/material/Pagination";
import styles from "./PaginationBlock.module.css";

interface Props {
    page: number;
    totalPages: number;
    onChange: (p: number) => void;
}

export const PaginationBlock = ({ page, totalPages, onChange }: Props) => {
    return (
        <div className={styles.paginationWrapper}>
            <Pagination
                count={Math.min(totalPages, 500)}
                page={page}
                onChange={(_, p) => onChange(p)}
                className="pagination-dark"
                color="primary"
                size="large"
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: "var(--text)",
                        borderColor: "var(--text)",
                    },
                    "& .MuiPaginationItem-root:hover": {
                        backgroundColor: "var(--header-button-hover)",
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#3b48f3",
                        color: "#fff",
                    },
                }}
            />
        </div>
    );
};
