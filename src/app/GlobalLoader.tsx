import LinearProgress from "@mui/material/LinearProgress";
import { useGlobalFetching } from "@/common/hooks/useGlobalFetching";

export const GlobalLoader = () => {
    const pending = useGlobalFetching();

    if (pending === 0) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999,
        }}>
            <LinearProgress />
        </div>
    );
};
