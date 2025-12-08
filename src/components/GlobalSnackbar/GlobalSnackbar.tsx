import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { clearError } from "@/app/errorSlice";

export const GlobalSnackbar = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.error.message);

    const handleClose = () => dispatch(clearError());

    return (
        <Snackbar
            open={Boolean(error)}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                {error}
            </Alert>
        </Snackbar>
    );
};
